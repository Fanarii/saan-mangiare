import FavoriteRestaurantIdb from '../../public/data/favorite'

const templateCreator = {
  cardsTemplate (item) {
    return `
        <img src="${item.pictureId}" alt="Cafe 1">
        <h2>${item.name}</h2>
        <p>City: ${item.city}</p>
        <p>Rating: ${item.rating}</p>
      `
  },

  detailTemplate (restaurant) {
    return `
    <div class="title">
    <h2>${restaurant.name}</h2>
    <img src=${restaurant.pictureId} alt="restaurant-image">
  </div>
  <div class="content">
    <div class="info">
      <h2>Information</h2>
      <p>City: ${restaurant.city}</p>
      <p>Rating: ${restaurant.rating}</p>
    </div>
    <div class="desc">
      <h2>Description</h2>
      <p>${restaurant.description}</p>
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
        <img src="${item.pictureId}" alt="Cafe 1">
        <h2>${item.name}</h2>
        <p>City: ${item.city}</p>
        <p>Rating: ${item.rating}</p>
      `

      card.addEventListener('click', () => {
        window.location.href = `#/detail/${item.id}`
      })

      wrapper.appendChild(card)
    })
  }
}

export default templateCreator
