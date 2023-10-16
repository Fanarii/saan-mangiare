import UrlParser from '../../routes/urlParser'
import templateCreator from '../../utils/templateCreator'
import getRestaurant from '../../utils/getRestaurant'
import DatabaseHelper from '../../utils/databaseHelper'

const Detail = {
  async render () {
    return `
      <detail-section></detail-section>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await getRestaurant(url.id)
    const element = document.querySelector('detail-section')
    const wrapper = element.shadowRoot.querySelector('.restaurant-wrapper')
    wrapper.innerHTML = templateCreator.detailTemplate(restaurant)

    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    DatabaseHelper.render(url.id, likeButtonContainer)

    likeButtonContainer.addEventListener('click', () => {
      DatabaseHelper.addFavorite(url.id)
    })
  }
}

export default Detail
