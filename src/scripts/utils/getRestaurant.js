import axios from 'axios'

const getRestaurant = async (id) => {
  try {
    const data = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return data.data.restaurant
  } catch (error) {
    console.log(error)
  }
}

export default getRestaurant
