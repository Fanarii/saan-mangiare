import contentHelper from '../../utils/helper/contentHelper'

const Home = {
  async render () {
    return `
      <content-section></content-section>
    `
  },

  afterRender () {
    contentHelper.init()

    const hero = document.querySelector('hero-section')
    const main = document.querySelector('main')
    main.style.marginTop = '0px'
    hero.style.display = 'block'
  }
}

export default Home
