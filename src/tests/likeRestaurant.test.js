import FavoriteRestaurantIdb from '../public/data/favorite'
import likeButtonPresenter from '../scripts/utils/likeButtonPresenter'

describe('liking a restaurant', () => {
  let likeButtonContainer

  beforeEach(() => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
    likeButtonContainer = document.body.querySelector('#likeButtonContainer')
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await likeButtonPresenter.init({ restaurant: { id: 1 }, likeButtonContainer })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy()
  })

  it('should not show unlike button when the restaurant has not been liked before', async () => {
    await likeButtonPresenter.init({ restaurant: { id: 1 }, likeButtonContainer })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy()
  })

  it('should be able to add restaurants to favorite', async () => {
    await likeButtonPresenter.init({ restaurant: { id: 1 }, likeButtonContainer })

    document.querySelector('#likeButton').click()

    const restaurant = await FavoriteRestaurantIdb.getFavoriteRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })

    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  xit('should be able to unlike the restaurant', async () => {

  })
})
