class DetailSection extends HTMLElement {
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
    .container {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .restaurant-wrapper {
        display: flex;
        width: 100%;
        padding: 10px;
        max-width: 90%;
        background-color: #f7f7f7;
        border: 1px solid #ccc;
        border-radius: 5px;
        justify-content: start;
        margin-top: 30px;
      }
      
      .info, .desc {
        margin: 15px;
      }
      
      .title {
        text-align: left;
        align-self: center;
      }
      
      .title h2 {
        font-size: 24px;
      }
      
      .title img {
        min-width: 50px;
        max-width: 300px;
        height: auto;
        display: block;
        margin: 0 auto;
      }
      
      .info, .desc {
        margin-top: 20px;
      }
      
      .info h2, .desc h2 {
        font-size: 20px;
      }
      
      .info p, .desc p {
        font-size: 16px;
        line-height: 1.5;
      }
      
      @media screen and (max-width: 768px) {
        .restaurant-wrapper {
          display: flex;
          flex-direction: column;
          margin-top: 0
        }
      
        .title {
          justify-self: start;
        }
      
        .title img {
          max-height: 300px;
        }
      
        .info, .desc {
          margin-left: 0;
        }
      }
      
      @media screen and (max-width: 575px) {
        .title img {
          
        }
      }
    </style>
    <div class="container">
      <div class="restaurant-wrapper">
      </div>
    </div>
    `
  }
}

customElements.define('detail-section', DetailSection)
