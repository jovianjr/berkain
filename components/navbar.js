class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <nav class="flex w-full justify-between px-12 py-9">
            <i class="fa-solid fa-bars text-xl text-secondary"></i>
            <h1 class="text-2xl font-semibold text-secondary font-lora tracker-tighter drop-shadow-lg">Berkain</h1>
            <i class="fa-solid fa-cart-shopping text-xl text-secondary"></i>
          </nav>
      `;
    }
}

customElements.define("navbar-component", Navbar);
