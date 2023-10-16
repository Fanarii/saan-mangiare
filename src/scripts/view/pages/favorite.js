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

    title.innerText = 'Favorited Restaurants'
    templateCreator.favoriteTemplate(wrapper)
  }
}

export default Favorite