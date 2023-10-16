class ContentSection extends HTMLElement {
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
    .content {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: #E3E3E3;
        text-align: center;
        align-items: center;
      }
      
      .content h1 {
        font-size: 2rem;
        margin-bottom: 20px;
      }
      
      .card {
        transition: ease-in-out 0.2s;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        text-align: center;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        min-width: 200px;
        background-color: #F6F5F5;
        cursor: pointer;
      }
      
      .card img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
      }
      
      .card h2 {
        font-size: 1.2rem;
        margin: 10px 0;
      }
      
      .card p {
        font-size: 1rem;
      }
      
      .card-wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        max-width: 1000px;
        justify-items: center;
        align-items: center;
      }
    
      .card:hover {
        transform: scale(1.1)
      }
    
      .card:focus {
        transform: scale(1.1)
      }

      input {
        flex: 1;
        border: none;
        outline: none;
        width: 80%;
        min-height: 20px;
        padding: 5px;
        max-width: 700px;
        margin: 10px;
        border-radius: 8px;
      }
    
      @media screen and (min-width: 476px) {
        .card-wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
      }
    
      @media screen and (min-width: 768px) {
        .card-wrapper {
            grid-template-columns: repeat(3, 1fr);
        }
      }
    
      @media screen and (min-width: 1024px) {
        .card {
          max-width: 280px;
        }
    
        .card-wrapper {
            grid-template-columns: repeat(4, 1fr);
        }
      }
    </style>
    
      
    <section class="content">
        <h1 class="title">Discover Caffe & Restaurants</h1>
        <input type="text" placeholder="Search..." class="search">
        <div class="card-wrapper">
        </div>
    </section>
    `
  }
}

customElements.define('content-section', ContentSection)
