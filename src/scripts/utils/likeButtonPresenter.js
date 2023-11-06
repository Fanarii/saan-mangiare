import FavoriteRestaurantIdb from '../../public/data/favorite'
import templateCreator from './templateCreator'

const likeButtonPresenter = {
  async init ({ restaurant, likeButtonContainer }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant

    await this._renderLikeButton()
    this._likeButtonContainer.addEventListener('click', async () => {
      await this._handleFavorite()
    })
  },

  async _renderLikeButton () {
    const { id } = this._restaurant
    const restaurant = await FavoriteRestaurantIdb.getFavoriteRestaurant(id)
    if (restaurant) {
      this._likeButtonContainer.innerHTML = templateCreator.createLikedButtonTemplate()
    } else {
      this._likeButtonContainer.innerHTML = templateCreator.createLikeButtonTemplate()
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurantIdb.getFavoriteRestaurant(id)
    return !!restaurant
  },

  async _handleFavorite () {
    console.log('button clicked')
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      await FavoriteRestaurantIdb.deleteRestaurant(id)
      this._renderLikeButton()
    } else {
      await FavoriteRestaurantIdb.addRestaurant(this._restaurant)
      this._renderLikeButton()
    }
  }

}

export default likeButtonPresenter
