import UrlParser from '../../routes/urlParser'
import templateCreator from '../../utils/templateCreator'
import getRestaurant from '../../utils/getRestaurant'
import DatabaseHelper from '../../utils/databaseHelper'
import axios from 'axios'

const Detail = {
  async render () {
    return `
    <div class="detail-container">
      <detail-section></detail-section>
      <review-section></review-section>
      <button id="likeButtonContainer"></button>
    </div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await getRestaurant(url.id)

    this._handleFavorite(restaurant, url)
    this._handleReview(restaurant, url)
  },

  async _handleFavorite (restaurant, url) {
    const element = document.querySelector('detail-section')
    const wrapper = element.shadowRoot.querySelector('.restaurant-wrapper')
    wrapper.innerHTML = templateCreator.detailTemplate(restaurant)

    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    DatabaseHelper.render(url.id, likeButtonContainer)

    likeButtonContainer.addEventListener('click', async () => {
      await DatabaseHelper.handleFavorite(url.id, likeButtonContainer)
    })
  },

  async _handleReview (restaurant, url) {
    const reviewElement = document.querySelector('review-section')
    const wrapper = reviewElement.shadowRoot.querySelector('.customer-reviews')

    const render = () => {
      wrapper.innerHTML = templateCreator.reviewTemplate(restaurant)
    }
    render()
    const nameInput = reviewElement.shadowRoot.querySelector('.name-input')
    const reviewInput = reviewElement.shadowRoot.querySelector('.review-input')
    const form = reviewElement.shadowRoot.querySelector('form')

    form.addEventListener('submit', async (e) => {
      const dataToSend = {
        id: url.id,
        name: nameInput.value,
        review: reviewInput.value
      }

      try {
        await axios.post('https://restaurant-api.dicoding.dev/review', dataToSend, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        render()
      } catch (error) {
        console.error('An error occurred while posting the review:', error)
      }
    })
  }
}

export default Detail
