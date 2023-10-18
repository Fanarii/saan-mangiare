import axios from 'axios'
import getRestaurant from '../getRestaurant'
import templateCreator from '../templateCreator'
import DatabaseHelper from './databaseHelper'

const DetailHelper = {
  async handleReview (restaurant, id) {
    const reviewElement = document.querySelector('review-section')
    const wrapper = reviewElement.shadowRoot.querySelector('.customer-reviews')

    const render = (newRestaurant) => {
      wrapper.innerHTML = templateCreator.reviewTemplate(newRestaurant || restaurant)
    }
    render()
    const nameInput = reviewElement.shadowRoot.querySelector('.name-input')
    const reviewInput = reviewElement.shadowRoot.querySelector('.review-input')
    const form = reviewElement.shadowRoot.querySelector('form')

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const dataToSend = {
        id,
        name: nameInput.value,
        review: reviewInput.value
      }

      try {
        await axios.post('https://restaurant-api.dicoding.dev/review', dataToSend, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const newRestaurant = await getRestaurant(id)
        render(newRestaurant)
        nameInput.value = ''
        reviewInput.value = ''
      } catch (error) {
        console.error('An error occurred while posting the review:', error)
      }
    })
  },

  async handleFavorite (restaurant, id) {
    const element = document.querySelector('detail-section')
    const wrapper = element.shadowRoot.querySelector('.restaurant-wrapper')
    wrapper.innerHTML = templateCreator.detailTemplate(restaurant)

    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    DatabaseHelper.render(id, likeButtonContainer)

    likeButtonContainer.addEventListener('click', async () => {
      await DatabaseHelper.handleFavorite(id, likeButtonContainer)
    })
  }
}

export default DetailHelper
