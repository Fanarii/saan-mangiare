import axios from 'axios'

const getData = async () => {
  try {
    const response = await axios.get('./data/DATA.json')
    const data = response.data.restaurants
    return data
  } catch (error) {
    console.log(error)
  }
}

const getRestaurant = async (restaurantId) => {
  try {
    const data = await getData()
    const result = data.filter((item) => item.id === restaurantId)
    return result[0]
  } catch (error) {
    console.log(error)
  }
}

export default getRestaurant
