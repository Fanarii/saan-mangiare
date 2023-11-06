import axios from 'axios'
import templateCreator from '../templateCreator'

const ContentInitiator = {
  init ({ data, searchBar }) {
    try {
      this._handleSearch(searchBar)
      this._renderCards(data)
      this._handleSkip()
    } catch (error) {
      console.log(error)
    }
  },

  async _renderCards (data) {
    const contentSection = document.querySelector('content-section')
    const wrapper = contentSection.shadowRoot.querySelector('.card-wrapper')
    wrapper.innerHTML = ''
    console.log(data)

    data.forEach((item) => {
      const card = document.createElement('button')
      card.classList.add('card')
      card.innerHTML = templateCreator.cardsTemplate(item)
      card.addEventListener('click', () => {
        window.location.href = `#/detail/${item.id}`
      })

      wrapper.appendChild(card)
    })
  },

  _handleSearch (searchBar) {
    console.log(searchBar)
    searchBar.addEventListener('keyup', async () => {
      const response = await axios.get(`https://restaurant-api.dicoding.dev/search?q=${searchBar.value}`)
      this._renderCards(response.data.restaurants)
    })
  },

  _handleSkip () {
    const navbar = document.querySelector('nav-bar')
    const skipButton = navbar.shadowRoot.querySelector('.skip-link')

    skipButton.setAttribute('href', '#main-content')
  }
}

export default ContentInitiator
