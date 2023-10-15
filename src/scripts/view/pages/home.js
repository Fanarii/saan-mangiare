import contentInitiator from '../../utils/contentInitiator'

const Home = {
  async render () {
    return `
      <hero-section></hero-section>
      <content-section></content-section>
    `
  },

  afterRender () {
    contentInitiator.init()
  }
}

export default Home
