import likeButtonPresenter from '../../scripts/utils/likeButtonPresenter'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await likeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant
  })
}

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant }
