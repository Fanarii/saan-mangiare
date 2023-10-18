import templateCreator from '../../utils/templateCreator'

const Favorite = {
  render () {
    return `
        <content-section></content-section>
    `
  },

  afterRender () {
    const contentSection = document.querySelector('content-section')
    const wrapper = contentSection.shadowRoot.querySelector('.card-wrapper')
    const title = contentSection.shadowRoot.querySelector('.title')
    const searchBar = contentSection.shadowRoot.querySelector('.search')
    const hero = document.querySelector('hero-section')
    const main = document.querySelector('main')

    main.style.marginTop = '60px'
    hero.style.display = 'none'
    searchBar.style.display = 'none'
    title.innerText = 'Favorited Restaurants'
    templateCreator.favoriteTemplate(wrapper)
  }
}

export default Favorite
