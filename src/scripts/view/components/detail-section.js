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
    .restaurant-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
        background-color: #f7f7f7;
        border: 1px solid #ccc;
        border-radius: 5px;
        justify-content: start;
      }
      
      .info, .desc {
        margin: 15px;
      }
      
      .title {
        text-align: left;
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

      .categories {
        display: flex;
      }

      .category {
        background-color: #E3E3E3;
        border-radius: 8px;
        padding: 5px;
        margin-top: 0;
        margin: 5px;
        margin-left: 0;
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
      <div class="restaurant-wrapper">
      </div>
    `
  }
}

customElements.define('detail-section', DetailSection)
