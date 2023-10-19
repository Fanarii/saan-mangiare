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
    const btn = this.shadowDOM.querySelectorAll('a')

    btn.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('show')
      })
    })

    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show')
    })
  }

  render () {
    this.shadowDOM.innerHTML = `
    <style>
      nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background-color: #59dfed;
      }

      .nav-wrapper {
        display: flex;
        color: white;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 0 20px;
      }
      
      ul {
        display: flex;
        list-style-type: none;
        gap: 15px;
      }
      
      ul li a {
        text-decoration: none;
        color: white;
        padding: 13px;
        font-size: 18px;
      }
      
      ul li {
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

      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        padding: 8px;
        background-color: #59dfed;
        color: white;
        z-index: 999999;
      }
      
      .skip-link:focus {
        top: 0;
      }
      
      @media screen and (max-width: 768px) {
        .hamburger {
          display: flex;
        }
      
        ul {
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
        
        ul.show {
          display: flex;
        }
      
        ul li {
          display flex;
          font-size: 23px;
          align-items: center;
          justify-content: center;
        }

        li a {
          width: max-content;
        }
      }
    </style>
    
      <nav>
      <a href="#main-content" class="skip-link">Menuju ke konten</a>
        <div class="nav-wrapper">
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
        </div>
      </nav>
    `
  }
}

customElements.define('nav-bar', NavBar)
