class HeroSection extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
    <style>
    .hero {
    background-size: cover;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 100px 0;
    position: relative;
    }
  
    .hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: -1;
    }
    
    .hero-content {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }
    
    .hero p {
        font-size: 1.2rem;
        margin-bottom: 40px;
    }
    
    .btn {
        display: inline-block;
        padding: 13px 23px;
        background-color: #3BB4C1;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    
    .btn:hover {
        background-color: #048998;
    }
</style>


<section class="hero" style="background-image: url('./images/heros/hero-image_2.jpg');">
    <div class="hero-content">
    <h1>Welcome to Saan Mangiare</h1>
    <p>Discover Caffe & Restaurants</p>
    <a href="#mainContent" class="btn">Explore</a>
    </div>
</section>
    `
  }
}

customElements.define('hero-section', HeroSection)
