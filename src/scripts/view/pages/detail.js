import UrlParser from '../../routes/urlParser'
import templateCreator from '../../utils/templateCreator'
import getRestaurant from '../../utils/getRestaurant'

const Detail = {
  async render () {
    return `
      <detail-section></detail-section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await getRestaurant(url.id)
    const element = document.querySelector('detail-section')
    const wrapper = element.shadowRoot.querySelector('.restaurant-wrapper')
    wrapper.innerHTML = templateCreator.detailTemplate(restaurant)
  }
}

export default Detail
