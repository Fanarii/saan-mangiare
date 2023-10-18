import FavoriteRestaurantIdb from '../../public/data/favorite'

const templateCreator = {
  cardsTemplate (item) {
    return `
        <img src="https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}" alt="Cafe 1">
        <h2>${item.name}</h2>
        <p>City: ${item.city}</p>
        <p>Rating: ${item.rating}</p>
      `
  },

  detailTemplate (restaurant) {
    return `
    <div class="title">
      <h2>${restaurant.name}</h2>
      <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="restaurant-image">
    </div>
    <div class="info">
      <h2>Information</h2>
      <p>City: ${restaurant.city}</p>
      <p>Rating: ${restaurant.rating}</p>
      <p>Address: ${restaurant.address}</p>
      <p>Categories: ${restaurant.categories.map(category => `<span class="category">${category.name}</span>`).join(' ')} </p>
    </div>
    <div class="desc">
      <h2>Description</h2>
      <p>${restaurant.description}</p>
    </div>
    <div class="container">
        <h2>Menu Section</h2>
        <div class="menus">
          <ul>
            <h3>Foods</h3>
            ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
          </ul>
          <ul>
            <h3>Drinks</h3>
            ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>
    </div>
    `
  },

  createLikeButtonTemplate () {
    return `
    <button aria-label="like this movie" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `
  },

  createLikedButtonTemplate () {
    return `
      <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
    `
  },

  async favoriteTemplate (wrapper) {
    const data = await FavoriteRestaurantIdb.getAllRestaurants()
    data.forEach((item) => {
      const card = document.createElement('button')
      card.classList.add('card')
      card.innerHTML += `
        <img src="https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}" alt="Cafe 1">
        <h2>${item.name}</h2>
        <p>City: ${item.city}</p>
        <p>Rating: ${item.rating}</p>
      `

      card.addEventListener('click', () => {
        window.location.href = `#/detail/${item.id}`
      })

      wrapper.appendChild(card)
    })
  },

  reviewTemplate (restaurant) {
    return `
      ${restaurant.customerReviews.map(customerReview => `
        <div class="review">
          <p class="review-name">Name: ${customerReview.name}</p>
          <p class="review-text">Review: ${customerReview.review}</p>
          <p class="review-date">Date: ${customerReview.date}</p>
        </div>`
      ).join(' ')}
    `
  }
}

export default templateCreator
