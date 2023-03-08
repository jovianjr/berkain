class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
    <footer
    class="flex flex-col gap-16 bg-shades-700 md:px-24 md:pt-12 pt-8 pb-4 px-7 text-shades-300 xl:px-40"
  >
    <div class="flex justify-between lg:gap-40 xl:gap-60 flex-col md:flex-row">
      <div class="flex flex-col gap-4">
        <span class="font-lora text-base font-bold text-shades-100"
          >Berkain</span
        >
        <div class="flex md:gap-16 gap-4 lg:text-xs xl:text-sm flex-col md:flex-row">
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
      <div class="flex gap-16 md:mt-0 mt-12">
        <div class="flex flex-col gap-2 text-base font-bold">
          <span class="font-lora text-shades-100">Navigasi</span>
          <ul class="flex flex-col gap-2 lg:text-xs xl:text-sm">
            <li class="cursor-pointer hover:underline w-max">Beranda</li>
            <li class="cursor-pointer hover:underline w-max">Telusuri</li>
            <li class="cursor-pointer hover:underline w-max">Login</li>
            <li class="cursor-pointer hover:underline w-max">Tentang Kami</li>
          </ul>
        </div>
        <div class="flex flex-col gap-2 text-base font-bold">
          <div class="w-max font-lora text-shades-100">Hubungi Kami</div>
          <ul class="flex flex-col gap-2 lg:text-xs xl:text-sm">
            <li class="cursor-pointer hover:underline w-max">Hotline</li>
            <li class="cursor-pointer hover:underline w-max">Email</li>
            <li class="cursor-pointer hover:underline w-max">Instagram</li>
            <li class="cursor-pointer hover:underline w-max">Twitter</li>
            <li class="cursor-pointer hover:underline w-max">Facebook</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center font-lora text-base text-shades-100 tracking-tighter">
      Hak Cipta © 2023 Berkain
    </div>
  </footer>
      `;
	}
}

customElements.define('footer-component', Footer);
