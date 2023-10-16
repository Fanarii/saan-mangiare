import FavoriteRestaurantIdb from '../../public/data/favorite'
import getRestaurant from './getRestaurant'
import templateCreator from './templateCreator'

const DatabaseHelper = {
  async render (id, button) {
    try {
      const restaurant = await this._getRestaurant(id)
      if (restaurant) {
        button.innerHTML = templateCreator.createLikedButtonTemplate()
      } else {
        button.innerHTML = templateCreator.createLikeButtonTemplate()
      }
    } catch (error) {
      console.error('Error in render:', error)
    }
  },

  async addFavorite (id, button) {
    try {
      const restaurant = await getRestaurant(id)
      await FavoriteRestaurantIdb.addRestaurant(restaurant)
      this.render(id, button)
    } catch (error) {
      console.error('Error in addFavorite:', error)
    }
  },

  async _getRestaurant (id) {
    try {
      const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
      return restaurant
    } catch (error) {
      console.error('Error in _getRestaurant:', error)
      return null
    }
  }
}

export default DatabaseHelper
