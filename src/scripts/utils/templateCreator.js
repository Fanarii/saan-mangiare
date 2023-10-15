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
  }
}

export default templateCreator
