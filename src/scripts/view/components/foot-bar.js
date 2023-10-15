class FootBar extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
            <p>Copyright &copy; Sigit Fajar Desfian 2023</p>
        `
  }
}

customElements.define('foot-bar', FootBar)
