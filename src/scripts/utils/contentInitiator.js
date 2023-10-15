import axios from 'axios'
import templateCreator from './templateCreator'

const contentInitiator = {
  async init () {
    try {
      const data = await this._getData()
      this._renderCards(data)
    } catch (error) {
      console.log(error)
    }
  },

  async _getData () {
    try {
      const response = await axios.get('../data/DATA.json')
      return response.data.restaurants
    } catch (error) {
      console.log(error)
      return []
    }
  },

  _renderCards (data) {
    const contentSection = document.querySelector('content-section')
    const wrapper = contentSection.shadowRoot.querySelector('.card-wrapper')

    data.forEach((item) => {
      const card = document.createElement('button')
      card.classList.add('card')
      card.innerHTML = templateCreator.cardsTemplate(item)
      card.addEventListener('click', () => {
        window.location.href = `#/detail/${item.id}`
      })

      wrapper.appendChild(card)
    })
  }
}

export default contentInitiator
