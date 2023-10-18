import FavoriteRestaurantIdb from '../../../public/data/favorite'
import getRestaurant from '../getRestaurant'
import templateCreator from '../templateCreator'
import Detail from '../../view/pages/detail'

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

  async handleFavorite (id, button) {
    try {
      const restaruantExist = await FavoriteRestaurantIdb.getRestaurant(id)
      console.log(restaruantExist)
      if (restaruantExist) {
        await FavoriteRestaurantIdb.deleteRestaurant(id)
      } else {
        const restaurant = await getRestaurant(id)
        await FavoriteRestaurantIdb.addRestaurant(restaurant)
      }

      this.render(id, button)
      Detail.render()
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
