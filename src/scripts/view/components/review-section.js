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

            input, button {
                min-width: 100px;
                min-height: 44px;
                border-radius: 5px;
                border: none;
                font-size: 16px;
                margin: 5px;
            }

            button {
              background-color: #59dfed;
              border: none;
              color: white;
              cursor: pointer;
            }

            .reviews {
              background-color: #f9f9f9;
              padding: 15px;
              margin-top: 20px;
            }
            
            .review {
              padding: 10px;
              margin: 10px 0;
              background-color: white;
              border-radius: 8px;
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
            <input type="text" placeholder="masukan nama..." class="name-input" required/>
            <input type="text" placeholder="kirim review..." class="review-input" required/>
            <button type="submit">Kirim</button>
          </form>
          <div class="customer-reviews">
          </div>
        </div>
        
    `
  }
}

customElements.define('review-section', ReviewSection)
