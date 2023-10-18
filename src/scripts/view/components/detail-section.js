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
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          ". ."
          ". .";  
        max-width: 100%;
        padding: 10px;
        background-color: #f7f7f7;
        border: 1px solid #ccc;
        border-radius: 5px;
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
        max-width: 500px;
        height: auto;
        display: block;
        margin: 0 auto;
        float: left;
      }
      
      .info, .desc, .title {
        margin-top: 20px;
      }
      
      h2 {
        font-size: 20px;
      }
      
      .info p, .desc p, title p {
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

      .container {
        background-color: #f9f9f9;
        padding: 15px;
      }

      .menus {
          display: flex;
      }
      
      @media screen and (max-width: 768px) {
        .restaurant-wrapper {
          display: flex;
          flex-direction: column;
          margin-top: 0
        }
      
        .title img {
          max-height: 480px;
          float: left;
        }
      
        .info, .desc, .container {
          margin-left: 0;
        }
      }
      
      @media screen and (max-width: 400px) {
        .menus {
          display: flex;
          flex-direction: column;
        }

        .title img {
          max-width: 250px;
        }
      }
    </style>
      <div class="restaurant-wrapper">
      </div>

    `
  }
}

customElements.define('detail-section', DetailSection)
