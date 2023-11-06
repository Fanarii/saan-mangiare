import UrlParser from '../../routes/urlParser'
import getRestaurant from '../../utils/getRestaurant'
import DetailInitiator from '../../utils/helper/detailInitiator'
import likeButtonPresenter from '../../utils/likeButtonPresenter'

const Detail = {
  async render () {
    return `
    <div class="detail-container">
      <detail-section></detail-section>
      <review-section></review-section>
      <button id="likeButtonContainer"></button>
    </div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const id = url.id
    const likeButtonContainer = document.body.querySelector('#likeButtonContainer')
    const element = document.querySelector('detail-section')
    const wrapper = element.shadowRoot.querySelector('.restaurant-wrapper')
    const restaurant = await getRestaurant(id)

    DetailInitiator.init({ id, wrapper })
    likeButtonPresenter.init({ restaurant, restoId: id, likeButtonContainer })
  }
}

export default Detail
