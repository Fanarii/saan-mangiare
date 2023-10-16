import axios from 'axios'
import templateCreator from './templateCreator'

const contentInitiator = {
  async init () {
    try {
      const data = await this._getData()
      const searchBar = this._getSerchBar()

      this._handleSearch(searchBar)
      this._renderCards(data)
    } catch (error) {
      console.log(error)
    }
  },

  async _getData () {
    try {
      const response = await axios.get('https://restaurant-api.dicoding.dev/list')
      return response.data.restaurants
    } catch (error) {
      console.log(error)
      return []
    }
  },

  _getSerchBar () {
    const element = document.querySelector('content-section')
    const searchBar = element.shadowRoot.querySelector('.search')
    return searchBar
  },

  async _renderCards (data) {
    const contentSection = document.querySelector('content-section')
    const wrapper = contentSection.shadowRoot.querySelector('.card-wrapper')
    wrapper.innerHTML = ''

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
    searchBar.addEventListener('keyup', async () => {
      const response = await axios.get(`https://restaurant-api.dicoding.dev/search?q=${searchBar.value}`)
      this._renderCards(response.data.restaurants)
    })
  }
}

export default contentInitiator
