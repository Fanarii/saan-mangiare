import UrlParser from '../../routes/urlParser'
import getRestaurant from '../../utils/getRestaurant'
import DetailHelper from '../../utils/helper/detailHelper'

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
    const restaurant = await getRestaurant(url.id)
    const id = url.id

    DetailHelper.handleFavorite(restaurant, id)
    DetailHelper.handleReview(restaurant, id)
  }
}

export default Detail
