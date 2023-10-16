import Detail from '../view/pages/detail'
import Home from '../view/pages/home'
import Favorite from '../view/pages/favorite'

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite
}

export default routes
