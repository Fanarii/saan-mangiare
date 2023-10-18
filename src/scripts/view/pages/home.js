import contentHelper from '../../utils/helper/contentHelper'

const Home = {
  async render () {
    return `
      <hero-section></hero-section>
      <content-section></content-section>
    `
  },

  afterRender () {
    contentHelper.init()
  }
}

export default Home
