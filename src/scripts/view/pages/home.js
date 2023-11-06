import axios from 'axios'
import ContentInitiator from '../../utils/helper/contentHelper'

const Home = {
  async render () {
    return `
      <content-section></content-section>
    `
  },

  afterRender () {
    const hero = document.querySelector('hero-section')
    const main = document.querySelector('main')
    main.style.marginTop = '0px'
    hero.style.display = 'block'

    const getSearchBar = () => {
      const element = document.querySelector('content-section')
      const searchBar = element.shadowRoot.querySelector('.search')
      return searchBar
    }

    const getData = async () => {
      try {
        const response = await axios.get('https://restaurant-api.dicoding.dev/list')
        return response.data.restaurants
      } catch (error) {
        console.log(error)
        return []
      }
    }

    const initializeContent = async () => {
      ContentInitiator.init({
        data: await getData(),
        searchBar: getSearchBar()
      })
    }

    initializeContent()
  }
}

export default Home
