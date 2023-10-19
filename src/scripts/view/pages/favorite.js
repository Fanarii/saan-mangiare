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

    const mainContent = document.getElementById('main-content')

    const navbar = document.querySelector('nav-bar')
    const skipButton = navbar.shadowRoot.querySelector('.skip-link')
    skipButton.addEventListener('click', (event) => {
      event.preventDefault()

      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    })
  }
}

export default Favorite
