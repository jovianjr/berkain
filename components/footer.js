class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <footer
          class="flex flex-col gap-24 bg-shades-700 px-24 py-12 text-shades-300 xl:px-40"
        >
          <div class="flex justify-between lg:gap-40 xl:gap-60">
            <div class="flex flex-col gap-4">
              <span class="font-lora text-base font-bold text-shades-100"
                >Berkain</span
              >
              <div class="flex gap-16 lg:text-xs xl:text-sm">
                <p>
                  Berkain adalah merek kain asli Indonesia yang menyediakan berbagai
                  jenis kain tradisional, seperti batik, tenun, songket, dan masih
                  banyak lagi. Kami berkomitmen untuk mempromosikan kekayaan budaya
                  Indonesia melalui karya-karya seni tekstil yang unik dan menarik.
                </p>
                <p>
                  Kami percaya bahwa Berkain dapat menjadi pilihan tepat untuk Anda
                  yang ingin tampil beda dan eksklusif, serta peduli dengan
                  perkembangan industri kerajinan lokal di Indonesia. Selamat datang
                  di Berkain, di mana keindahan kain Indonesia menjadi inspirasi
                  bagi karya kami.
                </p>
              </div>
            </div>
            <div class="flex gap-14">
              <div class="flex flex-col gap-2 text-base font-bold">
                <span class="font-lora text-shades-100">Navigasi</span>
                <ul class="flex flex-col gap-2 lg:text-xs xl:text-sm">
                  <li>Beranda</li>
                  <li>Telusuri</li>
                  <li>Login</li>
                  <li>Tentang Kami</li>
                </ul>
              </div>
              <div class="flex flex-col gap-2 text-base font-bold">
                <div class="w-max font-lora text-shades-100">Hubungi Kami</div>
                <ul class="flex flex-col gap-2 lg:text-xs xl:text-sm">
                  <li>Hotline</li>
                  <li>Email</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-center font-lora text-base text-shades-100">
            Hak Cipta © 2023 Berkain
          </div>
        </footer>
      `;
	}
}

customElements.define('footer-component', Footer);
