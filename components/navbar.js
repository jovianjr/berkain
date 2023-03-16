class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
		    <nav class="flex w-full justify-between px-12 py-9 relative">
            <i class="nav-open fa-solid fa-bars text-xl text-secondary"></i>
            <h1 class="text-2xl font-semibold text-secondary font-lora tracker-tighter drop-shadow-lg"><a href="index.html">Berkain</a></h1>
            <a href="checkout.html"><i class="fa-solid fa-cart-shopping text-xl text-secondary"></i></a>
        </nav>

        <div class="nav-container -left-full absolute top-0 h-screen w-full bg-primary z-[99] overflow-hidden">
          <div class="navhover-beranda w-2/12 absolute -top-8 font-lora text-shades-100 transition-all translate-y-4 text-6xl text-justify tracking-widest opacity-0">B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A B E R A N D A</div>
          <div class="navhover-telusuri w-2/12 absolute -top-8 font-lora text-shades-100 transition-all translate-y-4 text-6xl text-justify tracking-widest opacity-0">T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E L U S U R I T E </div>
          <div class="navhover-peta w-2/12 absolute -top-8 font-lora text-shades-100 transition-all translate-y-4 text-6xl text-justify tracking-widest opacity-0">P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A P E T A </div>
          <div class="navhover-masuk w-2/12 absolute -top-8 font-lora text-shades-100 transition-all translate-y-4 text-6xl text-justify tracking-widest opacity-0">M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K M A S U K </div>
          <nav class="flex w-full justify-between px-12 py-9 absolute">
            <i class="nav-close fa-solid fa-remove text-xl text-secondary"></i>
            <h1 class="text-2xl font-semibold text-secondary font-lora tracker-tighter drop-shadow-lg"><a href="index.html">Berkain</a></h1>
            <a href="checkout.html"><i class="fa-solid fa-cart-shopping text-xl text-secondary"></i></a>
          </nav>
          <nav class="w-full h-full flex flex-col justify-center items-center text-4xl font-lora gap-8 font-bold">
            <a href="index.html" class="hover:text-shades-100 hover:drop-shadow-lg menu menu-beranda">Beranda</a>
            <a href="search.html" class="hover:text-shades-100 hover:drop-shadow-lg menu menu-telusuri">Telusuri</a>
            <a href="map.html" class="hover:text-shades-100 hover:drop-shadow-lg menu menu-peta">Peta</a>
            <a href="login.html" class="hover:text-shades-100 hover:drop-shadow-lg menu menu-masuk">Masuk</a>
          </nav>
        </div>
      `;
    }
}

customElements.define("navbar-component", Navbar);
