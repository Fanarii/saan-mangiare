class ReviewSection extends HTMLElement {
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
            form {
              diplay: flex;
              flex-direction: column;
            }

            form input {
                min-width: 100px;
                min-height: 30px;
            }

            .reviews {
              background-color: #f9f9f9;
              padding: 15px;
              margin-top: 20px;
            }
            
            .review {
              border: 1px solid #ddd;
              padding: 10px;
              margin: 10px 0;
            }
            
            .review-name {
              font-weight: bold;
            }
            
            .review-date {
              color: #777;
            }
        </style>
        <div class="reviews">
          <h2>Customer Reviews</h2>
          <form>
            
            <input type="text" placeholder="masukan nama..." class="name-input"/>
            <input type="text" placeholder="kirim review..." class="review-input"/>
            <button type="submit">Kirim</button>
          </form>
          <div class="customer-reviews">
          </div>
        </div>
        
    `
  }
}

customElements.define('review-section', ReviewSection)
