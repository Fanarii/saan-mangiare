import { openDB } from 'idb'
import CONFIG from '../../config/config'

const { DATABASE_NAME, OBJECT_STORE_NAME, DATABASE_VERSION } = CONFIG

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  }
})

const FavoriteRestaurantIdb = {
  async getFavoriteRestaurant (id) {
    if (!id) return
    const result = (await dbPromise).get(OBJECT_STORE_NAME, id)
    return result
  },

  async getAllRestaurants () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },

  async addRestaurant (restaurant) {
    console.log(restaurant)
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
  },

  async putRestaurant (restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
  },

  async deleteRestaurant (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  }
}

export default FavoriteRestaurantIdb
