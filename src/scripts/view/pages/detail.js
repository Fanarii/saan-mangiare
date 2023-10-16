import UrlParser from '../../routes/urlParser'
import templateCreator from '../../utils/templateCreator'
import getRestaurant from '../../utils/getRestaurant'
import DatabaseHelper from '../../utils/databaseHelper'

const Detail = {
  async render () {
    return `
      <detail-section></detail-section>
      <button id="likeButtonContainer"></button>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await getRestaurant(url.id)

    console.log(restaurant)

    const element = document.querySelector('detail-section')
    const wrapper = element.shadowRoot.querySelector('.restaurant-wrapper')
    wrapper.innerHTML = templateCreator.detailTemplate(restaurant)

    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    DatabaseHelper.render(url.id, likeButtonContainer)

    likeButtonContainer.addEventListener('click', async () => {
      await DatabaseHelper.handleFavorite(url.id, likeButtonContainer)
    })
  }
}

export default Detail
