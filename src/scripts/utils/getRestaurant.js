import axios from 'axios'

const getRestaurant = async (restaurantId) => {
  try {
    const data = await axios.get(`https://restaurant-api.dicoding.dev/detail/${restaurantId}`)
    return data.data.restaurant
  } catch (error) {
    console.log(error)
  }
}

export default getRestaurant
