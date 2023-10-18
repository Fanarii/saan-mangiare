import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'

import './view/components/nav-bar.js'
import './view/components/hero-section.js'
import './view/components/content-section.js'
import './view/components/foot-bar.js'
import './view/components/detail-section.js'
import './view/components/review-section.js'

import App from './view/app'
import swRegister from './utils/swRegister'

const mainContent = document.querySelector('#main-content')

const app = new App(mainContent)
const jam = new Date()
console.log(jam)

window.addEventListener('hashchange', () => {
  app.renderPege()
})

window.addEventListener('load', () => {
  app.renderPege()
  swRegister()
})
