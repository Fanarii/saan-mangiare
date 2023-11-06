import axios from 'axios'
import getRestaurant from '../getRestaurant'
import templateCreator from '../templateCreator'

const DetailInitiator = {
  async init ({ id, wrapper }) {
    const restaurant = await this._getRestaurant(id)
    wrapper.innerHTML = templateCreator.detailTemplate(restaurant)

    this._handleReview(restaurant, id)
    this._handleHeader(id)
  },

  async _handleReview (restaurant, id) {
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

  _handleHeader () {
    // Skip to content
    const mainContent = document.getElementById('main-content')

    const navbar = document.querySelector('nav-bar')
    const skipButton = navbar.shadowRoot.querySelector('.skip-link')
    skipButton.addEventListener('click', (event) => {
      event.preventDefault()

      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    })

    // Hero section
    const hero = document.querySelector('hero-section')
    const main = document.querySelector('main')
    main.style.marginTop = '60px'
    hero.style.display = 'none'
  },

  async _getRestaurant (id) {
    try {
      const restaurant = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`)
      return restaurant.data.restaurant
    } catch (error) {
      console.log(error)
    }
  }
}

export default DetailInitiator
