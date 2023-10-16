class NavBar extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    this._initNavbar()
  }

  _initNavbar () {
    const hamburger = this.shadowDOM.querySelector('.hamburger')
    const menu = this.shadowDOM.querySelector('nav ul')

    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show')
    })
  }

  render () {
    this.shadowDOM.innerHTML = `
    <style>
      nav {
        display: flex;
        color: white;
        justify-content: space-between;
        background-color: #59dfed;
        align-items: center;
        height: 60px;
        padding: 0 20px;
      }
      
      nav ul {
        display: flex;
        list-style-type: none;
        gap: 15px;
      }
      
      nav ul li a {
        text-decoration: none;
        color: white;
        padding: 13px;
        font-size: 18px;
      }
      
      nav ul li {
        display: flex;
      }
      
      .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: 10px;
      }
      
      .hamburger div {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 3px 0;
      }
      
      @media screen and (max-width: 768px) {
        .hamburger {
          display: flex;
        }
      
        nav ul {
          display: none; 
          flex-direction: column;
          background-color: #59dfed;
          position: absolute;
          top: 43px;
          left: 0;
          width: 100%;
          padding: 0;
          z-index: 1;
        }
      
        nav ul.show {
          display: flex;
        }
      
        nav ul li {
          font-size: 23px;
        }
      }
    </style>
    
      <nav>
          <h1>Saan Mangiare</h1>
          <button class="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://github.com/Fanarii">About Us</a></li>
        </ul>
      </nav>
    `
  }
}

customElements.define('nav-bar', NavBar)
