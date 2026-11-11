/* ================= SITE SETTINGS — edit these ================= */
const CONFIG = {
  name: 'Tiens Electronics & Technical Services Limited',
  phone: '+234 803 718 3515',
  phoneRaw: '2348037183515',
  navPhone: '+44 20 7946 0000',     // shown in the navbar — PLACEHOLDER, replace with the real UK number
  navPhoneRaw: '442079460000',
  email: 'tienselectronictechnicalservice@gmail.com',
  address: '17/19 Allen Avenue, Ikeja, Lagos',
  hours: '',        // e.g. 'Mon – Sat, 8am – 6pm' (hidden when empty)
  facebook: '',     // full URL, hidden when empty
  instagram: '',    // full URL, hidden when empty
  logo: ''          // e.g. '/images/logo.png' to use an image file instead of the built-in logo
};

/* ================= PRODUCTS — sample data, replace with real ================= */
/* img: '/images/fridge.jpg' (optional). gallery: extra image paths (optional). */
const PRODUCTS = [
  { id: 'fridge-dd-350', name: 'Double-Door Refrigerator 350L', cat: 'Refrigerators & Freezers', price: 485000, img: '/images/products/fridge-double-door.jpg', gallery: [], desc: 'Frost-free double-door refrigerator with a spacious fridge section and separate freezer. Energy efficient and quiet.', specs: [['Capacity', '350 litres'], ['Type', 'Double door, frost free'], ['Energy rating', '[Rating]'], ['Warranty', '[Warranty period]']] },
  { id: 'chest-freezer-250', name: 'Chest Freezer 250L', cat: 'Refrigerators & Freezers', price: 265000, img: '/images/products/chest-freezer.jpg', gallery: [], desc: 'Reliable chest freezer for bulk storage with fast-freeze function.', specs: [['Capacity', '250 litres'], ['Type', 'Chest freezer'], ['Energy rating', '[Rating]'], ['Warranty', '[Warranty period]']] },
  { id: 'washer-8kg', name: 'Front-Load Washing Machine 8kg', cat: 'Washing Machines', price: 420000, img: '/images/products/washer-front-load.jpg', gallery: [], desc: 'Front-load washer with multiple wash programmes, gentle on fabrics and efficient with water.', specs: [['Capacity', '8 kg'], ['Type', 'Front load'], ['Spin speed', '[RPM]'], ['Warranty', '[Warranty period]']] },
  { id: 'twin-tub-10kg', name: 'Twin-Tub Washing Machine 10kg', cat: 'Washing Machines', price: 195000, img: '/images/products/washer-twin-tub.jpg', gallery: [], desc: 'Durable twin-tub washer and spinner for large family loads.', specs: [['Capacity', '10 kg'], ['Type', 'Twin tub'], ['Spin speed', '[RPM]'], ['Warranty', '[Warranty period]']] },
  { id: 'ac-15hp', name: '1.5HP Split Air Conditioner', cat: 'Air Conditioners', price: 395000, img: '/images/products/ac-split-15hp.jpg', gallery: [], desc: 'Fast-cooling split unit ideal for bedrooms and small living rooms. Installation available.', specs: [['Power', '1.5 HP'], ['Type', 'Split unit'], ['Cooling capacity', '[BTU]'], ['Warranty', '[Warranty period]']] },
  { id: 'ac-2hp', name: '2HP Split Air Conditioner', cat: 'Air Conditioners', price: 520000, img: '/images/products/ac-split-2hp.jpg', gallery: [], desc: 'Powerful 2HP split air conditioner for larger rooms and offices. Installation available.', specs: [['Power', '2 HP'], ['Type', 'Split unit'], ['Cooling capacity', '[BTU]'], ['Warranty', '[Warranty period]']] },
  { id: 'gas-cooker-4b', name: 'Gas Cooker 4-Burner with Oven', cat: 'Cookers & Ovens', price: 310000, img: '/images/products/gas-cooker.jpg', gallery: [], desc: 'Four-burner gas cooker with built-in oven and grill.', specs: [['Burners', '4'], ['Type', 'Gas with oven'], ['Finish', '[Finish]'], ['Warranty', '[Warranty period]']] },
  { id: 'microwave-30l', name: 'Microwave Oven 30L', cat: 'Microwaves', price: 98000, img: '/images/products/microwave.jpg', gallery: [], desc: 'Digital microwave oven with multiple power levels and defrost mode.', specs: [['Capacity', '30 litres'], ['Type', 'Digital'], ['Power', '[Watts]'], ['Warranty', '[Warranty period]']] },
  { id: 'blender-15l', name: 'Heavy-Duty Blender 1.5L', cat: 'Kitchen Appliances', price: 38500, img: '/images/products/blender.jpg', gallery: [], desc: 'Multi-speed blender for smoothies, soups and sauces.', specs: [['Capacity', '1.5 litres'], ['Speeds', '[Speeds]'], ['Power', '[Watts]'], ['Warranty', '[Warranty period]']] },
  { id: 'kettle-18l', name: 'Electric Kettle 1.8L', cat: 'Kitchen Appliances', price: 18500, img: '/images/products/kettle.jpg', gallery: [], desc: 'Fast-boil stainless steel electric kettle with auto shut-off.', specs: [['Capacity', '1.8 litres'], ['Material', 'Stainless steel'], ['Power', '[Watts]'], ['Warranty', '[Warranty period]']] },
  { id: 'stabilizer-5k', name: 'Voltage Stabilizer 5KVA', cat: 'Accessories', price: 72000, img: '/images/products/stabilizer.jpg', gallery: [], desc: 'Protect your appliances from power surges with this automatic voltage stabilizer.', specs: [['Rating', '5 KVA'], ['Type', 'Automatic'], ['Input range', '[Range]'], ['Warranty', '[Warranty period]']] },
  { id: 'extension-6w', name: 'Surge-Protected Extension 6-Way', cat: 'Accessories', price: 9500, img: '/images/products/extension.jpg', gallery: [], desc: 'Six-way extension with surge protection and individual switch.', specs: [['Sockets', '6'], ['Cable length', '[Length]'], ['Protection', 'Surge protected'], ['Warranty', '[Warranty period]']] }
];
const CATEGORIES = [...new Set(PRODUCTS.map(p => p.cat))];

/* ================= REVIEWS — home page ================= */
/* These are SAMPLE reviews for previewing the design. Replace them with real customer
   reviews (with the customer's permission) before the site goes live, and delete `sample: true`. */
const REVIEWS = [
  { name: 'Chioma A.', area: 'Ikeja', service: 'AC installation', rating: 5, text: 'They installed two split units in our flat and were in and out in one afternoon. Clean work, and they tested everything before leaving.', sample: true },
  { name: 'Tunde O.', area: 'Maryland', service: 'Refrigerator repair', rating: 5, text: 'My fridge stopped cooling on a Friday. The technician came the next morning, found the fault quickly and explained the cost before starting.', sample: true },
  { name: 'Blessing E.', area: 'Ogba', service: 'Washing machine purchase', rating: 4, text: 'Good price on a front-load washer and delivery was the same week. They also helped set it up and showed me the programmes.', sample: true }
];
/* category card images on the Appliances page */
const CAT_IMG = {
  'Refrigerators & Freezers': '/images/categories/refrigerators.jpg',
  'Washing Machines': '/images/categories/washing-machines.jpg',
  'Air Conditioners': '/images/categories/air-conditioners.jpg',
  'Cookers & Ovens': '/images/categories/cookers.jpg',
  'Microwaves': '/images/categories/microwaves.jpg',
  'Kitchen Appliances': '/images/categories/kitchen-appliances.jpg',
  'Accessories': '/images/categories/accessories.jpg'
};

/* ================= helpers ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = n => '₦ ' + Number(n).toLocaleString('en-NG');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const byId = id => PRODUCTS.find(p => p.id === id);
const imgOrPh = (p, h, label) => p && p.img ? `<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">` : (label || 'Image placeholder');

/* ================= cart (localStorage) ================= */
const Cart = {
  key: 'tiens_cart',
  read() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch (e) { return {}; } },
  write(c) { try { localStorage.setItem(this.key, JSON.stringify(c)); } catch (e) { } Cart.paint(); },
  add(id, q = 1) { const c = this.read(); c[id] = Math.min(99, (c[id] || 0) + q); this.write(c); },
  set(id, q) { const c = this.read(); if (q <= 0) delete c[id]; else c[id] = Math.min(99, q); this.write(c); },
  remove(id) { const c = this.read(); delete c[id]; this.write(c); },
  clear() { this.write({}); },
  lines() { const c = this.read(); return Object.keys(c).map(id => ({ p: byId(id), qty: c[id] })).filter(l => l.p); },
  count() { return this.lines().reduce((a, l) => a + l.qty, 0); },
  total() { return this.lines().reduce((a, l) => a + l.p.price * l.qty, 0); },
  paint() { const n = Cart.count(); $$('.badge').forEach(b => { b.textContent = n || ''; b.dataset.n = n; }); }
};

function toast(msg) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite'); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('on');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 1800);
}

/* ================= shared header / footer ================= */
const SERVICES = [['appliances', 'Appliances', '/services/appliances'], ['hvac', 'HVAC', '/services/hvac'], ['repairs', 'Repairs', '/services/repairs']];
const NAV = [['index', 'Home', '/'], ['services', 'Services', '/services'], ['about', 'About Us', '/about'], ['shop', 'Shop', '/shop'], ['contact', 'Contact Us', '/contact']];
/* built-in logo: icon image (/images/logo-mark.svg) plus the wordmark */
const MARK = '<img class="mark" src="/images/logo-mark.svg" width="42" height="42" alt="">';
const BRAND = `${MARK}<span class="brand"><span class="brand-name">Tiens</span><span class="brand-sub">Electronics &amp; Technical Services</span></span>`;
const CHECK ='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d5fb8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12.5l3 3 5-6"/></svg>';

function renderChrome() {
  const page = document.body.dataset.page;
  const active = ['product', 'cart', 'checkout'].includes(page) ? 'shop' : SERVICES.some(([k]) => k === page) ? 'services' : page;
  const logo = CONFIG.logo ? `<img src="${esc(CONFIG.logo)}" alt="">` : BRAND;
  $('#site-header').innerHTML = `<header class="hdr"><div class="container hdr-in">
  <a class="logo" href="/" aria-label="${esc(CONFIG.name)} — Home">${logo}</a>
  <nav class="nav" id="nav">${NAV.map(([k, l, h]) => `<a href="${h}" class="${k === active ? 'active' : ''}">${l}</a>`).join('')}</nav>
  <div class="hdr-r"><a class="phone" href="tel:+${CONFIG.navPhoneRaw}">${CONFIG.navPhone}</a>
  <a class="cartbtn" href="/cart" aria-label="Cart"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg><span class="badge" data-n="0"></span></a>
  <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div></div></header>`;
  const social = [CONFIG.facebook && `<a href="${esc(CONFIG.facebook)}" target="_blank" rel="noopener">Facebook</a>`, CONFIG.instagram && `<a href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener">Instagram</a>`].filter(Boolean).join(' · ');
  $('#site-footer').innerHTML = `<footer class="ft"><div class="container"><div class="ft-g">
  <div><a class="logo" href="/" aria-label="${esc(CONFIG.name)} — Home">${logo}</a><p>Top quality home appliances and reliable technical services to keep your home running smoothly.</p></div>
  <div><h4>Explore</h4><ul>${[NAV[0], NAV[1], ...SERVICES, NAV[3]].map(([k, l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
  <div><h4>Company</h4><ul><li><a href="/about">About Us</a></li><li><a href="/contact">Contact Us</a></li><li><a href="/cart">Cart</a></li></ul></div>
  <div class="ft-contact"><h4>Contact</h4><ul><li><a href="tel:+${CONFIG.phoneRaw}">${CONFIG.phone}</a></li><li><a class="ft-email" href="mailto:${CONFIG.email}">${CONFIG.email}</a></li><li>${CONFIG.address}</li>${CONFIG.hours ? `<li>${esc(CONFIG.hours)}</li>` : ''}${social ? `<li>${social}</li>` : ''}</ul></div>
  </div><div class="ft-b"><span>© ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.</span></div>
  <div class="ft-credit">Site by <a href="https://github.com/Brendanmebson" target="_blank" rel="noopener noreferrer">Brendan</a> · <a href="mailto:brendanmebson@gmail.com">brendanmebson@gmail.com</a></div></div></footer>`;
  /* floating WhatsApp chat button (hidden on checkout, where the order flow has its own) */
  if (page !== 'checkout') {
    const fab = document.createElement('a');
    fab.className = 'wa-fab';
    fab.href = waLink(`Hello ${CONFIG.name}, I have an enquiry.`);
    fab.target = '_blank'; fab.rel = 'noopener';
    fab.setAttribute('aria-label', 'Chat with us on WhatsApp');
    fab.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.4A8.4 8.4 0 1 1 20 11.5z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2.2-1-1 .9a5 5 0 0 1-2.6-2.6l.9-1-1-2.2z" fill="#fff" stroke="none"/></svg><span>Chat on WhatsApp</span>`;
    document.body.appendChild(fab);
  }
  /* mobile menu: toggle, and close on link tap, Escape or tap outside */
  const nav = $('#nav'), burger = $('#burger');
  const setMenu = open => { nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
  burger.addEventListener('click', e => { e.stopPropagation(); setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); burger.focus(); } });
  document.addEventListener('click', e => { if (nav.classList.contains('open') && !nav.contains(e.target)) setMenu(false); });
  Cart.paint();
}
const waLink = text => `https://wa.me/${CONFIG.phoneRaw}?text=${encodeURIComponent(text)}`;
const mailLink = (subject, body) => `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
/* spec values still in [square brackets] are unfilled placeholders, so they are not shown */
const realSpecs = specs => specs.filter(([, v]) => !/^\[.*\]$/.test(String(v).trim()));

/* ================= shared pieces ================= */
function productCard(p) {
  return `<article class="pcard"><a href="/product?id=${p.id}" class="ph" aria-label="${esc(p.name)}">${imgOrPh(p, 0, 'Product image')}</a>
  <div class="pb"><span class="pcat">${esc(p.cat)}</span><a class="pname" href="/product?id=${p.id}">${esc(p.name)}</a><span class="pprice">${fmt(p.price)}</span>
  <button class="btn btn-y btn-sm" data-add="${p.id}">Add to Cart</button></div></article>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-add]');
  if (b) { Cart.add(b.dataset.add); toast('Added to cart'); }
});

/* ================= pages ================= */
const Pages = {
  index() {
    $('#featured').innerHTML = PRODUCTS.slice(0, 4).map(productCard).join('');
    const star = on => `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" fill="${on ? '#f5b301' : '#d1d5db'}"/></svg>`;
    const initials = n => n.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    $('#reviews').innerHTML = REVIEWS.map(r => `<figure class="review">
      <div class="stars" role="img" aria-label="Rated ${r.rating} out of 5">${[1, 2, 3, 4, 5].map(i => star(i <= r.rating)).join('')}</div>
      <blockquote>“${esc(r.text)}”</blockquote>
      <figcaption><span class="av" aria-hidden="true">${esc(initials(r.name))}</span><span><b>${esc(r.name)}</b><small>${esc(r.service)} · ${esc(r.area)}</small></span></figcaption></figure>`).join('');
    $('#review-cta').href = waLink(`Hello ${CONFIG.name}, I'd like to share feedback about my experience.`);  },

  appliances() {
    $('#catgrid').innerHTML = CATEGORIES.map(c => {
      const n = PRODUCTS.filter(p => p.cat === c).length;
      const img = CAT_IMG[c] ? `<img src="${esc(CAT_IMG[c])}" alt="${esc(c)}" loading="lazy" decoding="async">` : 'Image placeholder';
      return `<a class="card link svc" href="/shop?cat=${encodeURIComponent(c)}"><div class="ph">${img}</div><h3>${esc(c)}</h3><p>${n}${n === 1 ? ' product' : ' products'}</p><span class="more">View →</span></a>`;
    }).join('');
  },

  shop() {
    const params = new URLSearchParams(location.search);
    let cat = CATEGORIES.includes(params.get('cat')) ? params.get('cat') : 'All';
    let q = '', sort = 'featured';
    const chips = $('#chips'), grid = $('#pgrid');
    const draw = () => {
      chips.innerHTML = ['All', ...CATEGORIES].map(c => `<button class="chip ${c === cat ? 'on' : ''}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
      let list = PRODUCTS.filter(p => (cat === 'All' || p.cat === cat) && (p.name + ' ' + p.cat).toLowerCase().includes(q));
      if (sort === 'low') list.sort((a, b) => a.price - b.price);
      if (sort === 'high') list.sort((a, b) => b.price - a.price);
      if (sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
      $('#count').textContent = list.length + (list.length === 1 ? ' product' : ' products');
      grid.innerHTML = list.length ? list.map(productCard).join('') : '';
      $('#none').hidden = list.length > 0;
    };
    chips.addEventListener('click', e => { const c = e.target.closest('[data-c]'); if (c) { cat = c.dataset.c; draw(); } });
    $('#q').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); draw(); });
    $('#sort').addEventListener('change', e => { sort = e.target.value; draw(); });
    draw();
  },

  product() {
    const p = byId(new URLSearchParams(location.search).get('id'));
    const root = $('#pd');
    if (!p) { root.innerHTML = '<div class="empty" style="grid-column:1/-1">Product not found. <a href="/shop" style="color:#1d5fb8;font-weight:600">Back to shop</a></div>'; return; }
    document.title = p.name + ' — Tiens Electronics';
    const imgs = [p.img, ...(p.gallery || [])].filter(Boolean);
    const slots = imgs.length ? imgs : [''];
    let cur = 0, qty = 1;
    const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).concat(PRODUCTS.filter(x => x.cat !== p.cat)).slice(0, 4);
    const drawGal = () => {
      $('#gmain').innerHTML = slots[cur] ? `<img src="${esc(slots[cur])}" alt="${esc(p.name)}">` : 'Product image';
      $$('.thumb').forEach((t, i) => t.classList.toggle('on', i === cur));
    };
    root.innerHTML = `<div><div class="ph gal-main" id="gmain"></div>${slots.length > 1 ? `<div class="thumbs">${slots.map((s, i) => `<button class="ph thumb" data-i="${i}" aria-label="Show image ${i + 1} of ${slots.length}"><img src="${esc(s)}" alt=""></button>`).join('')}</div>` : ''}</div>
    <div><div class="crumb" style="color:#4b5563;font-size:14px"><a href="/">Home</a> / <a href="/shop">Shop</a> / <a href="/shop?cat=${encodeURIComponent(p.cat)}">${esc(p.cat)}</a></div>
    <span class="pcat" style="display:block;margin-top:14px">${esc(p.cat)}</span><h1>${esc(p.name)}</h1><div class="price">${fmt(p.price)}</div>
    <p class="lead2" style="margin-top:14px">${esc(p.desc)}</p>
    <div class="row" style="margin-top:26px"><div class="qty"><button id="qm" aria-label="Decrease quantity">−</button><span id="qv" aria-live="polite" aria-label="Quantity">1</span><button id="qp" aria-label="Increase quantity">+</button></div>
    <button class="btn btn-y" id="addb" style="flex:1;min-width:180px">Add to Cart</button></div>
    <div class="row" style="margin-top:12px"><button class="btn btn-d" id="buyb" style="flex:1">Buy Now</button><a class="btn btn-o" href="tel:+${CONFIG.phoneRaw}" style="flex:1">Call to Order</a></div>
    ${(() => { const s = realSpecs(p.specs || []); return s.length ? `<h3 style="margin-top:36px;font-size:22px;letter-spacing:-.02em">Specifications</h3>
    <table class="specs">${s.map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</table>` : ''; })()}</div>`;
    $('#related').innerHTML = related.map(productCard).join('');
    drawGal();
    root.addEventListener('click', e => { const t = e.target.closest('.thumb'); if (t) { cur = +t.dataset.i; drawGal(); } });
    $('#qm').onclick = () => { qty = Math.max(1, qty - 1); $('#qv').textContent = qty; };
    $('#qp').onclick = () => { qty = Math.min(99, qty + 1); $('#qv').textContent = qty; };
    $('#addb').onclick = () => { Cart.add(p.id, qty); toast(qty + ' added to cart'); };
    $('#buyb').onclick = () => { Cart.add(p.id, qty); location.href = '/cart'; };
  },

  cart() {
    const root = $('#cartlines');
    const draw = () => {
      const ls = Cart.lines();
      $('#cartempty').hidden = ls.length > 0;
      $('#cartfull').hidden = ls.length === 0;
      root.innerHTML = ls.map(({ p, qty }) => `<div class="line"><a class="ph" href="/product?id=${p.id}">${imgOrPh(p, 0, 'Image')}</a>
      <div class="info"><a href="/product?id=${p.id}">${esc(p.name)}</a><div style="color:#4b5563;font-size:14px;margin-top:2px">${fmt(p.price)} each</div><button class="rm" data-rm="${p.id}">Remove</button></div>
      <div class="qty"><button data-m="${p.id}" aria-label="Decrease">−</button><span>${qty}</span><button data-p="${p.id}" aria-label="Increase">+</button></div>
      <div class="lt">${fmt(p.price * qty)}</div></div>`).join('');
      $('#sub').textContent = fmt(Cart.total());
      $('#tot').textContent = fmt(Cart.total());
    };
    root.addEventListener('click', e => {
      const t = e.target.closest('button'); if (!t) return;
      const c = Cart.read();
      if (t.dataset.rm) Cart.remove(t.dataset.rm);
      if (t.dataset.m) Cart.set(t.dataset.m, (c[t.dataset.m] || 1) - 1);
      if (t.dataset.p) Cart.set(t.dataset.p, (c[t.dataset.p] || 0) + 1);
      draw();
    });
    $('#clear').onclick = () => { Cart.clear(); draw(); };
    draw();
  },

  checkout() {
    const ls = Cart.lines();
    const showSummary = () => {
      $('#olines').innerHTML = Cart.lines().map(({ p, qty }) => `<div class="r" style="color:#111"><span>${esc(p.name)} × ${qty}</span><b>${fmt(p.price * qty)}</b></div>`).join('');
      $('#otot').textContent = fmt(Cart.total());
    };
    if (!ls.length) { $('#co-empty').hidden = false; $('#co-main').hidden = true; return; }
    showSummary();
    /* Orders are sent to the shop over WhatsApp (or email). The cart is only emptied once the
       customer confirms they sent it, so closing WhatsApp by mistake never loses the order. */
    $('#coform').addEventListener('submit', e => {
      e.preventDefault();
      const c = Object.fromEntries(new FormData(e.target).entries());
      const lines = Cart.lines();
      const total = Cart.total();
      const ref = 'TIENS-' + new Date().toISOString().slice(2, 10).replace(/-/g, '') + '-' + Math.floor(1000 + Math.random() * 9000);
      const where = c.delivery === 'Pickup' ? 'Pickup at ' + CONFIG.address : [c.address, c.city, c.state].filter(Boolean).join(', ');
      const msg = `Hello ${CONFIG.name}, I'd like to place an order.\nOrder ref: ${ref}\n\n` + lines.map(l => `• ${l.p.name} × ${l.qty} — ${fmt(l.p.price * l.qty)}`).join('\n') + `\n\nTotal: ${fmt(total)}\nDelivery: ${c.delivery === 'Pickup' ? 'Pickup' : 'Delivery to ' + where}\nPayment: ${c.payment}\n\nName: ${c.name}\nPhone: ${c.phone}\nEmail: ${c.email || '-'}\nNotes: ${c.notes || '-'}`;
      $('#refno').textContent = ref;
      $('#wa').href = waLink(msg);
      $('#mailo').href = mailLink('Order ' + ref, msg);
      $('#co-main').hidden = true;
      $('#co-done').hidden = false;
      window.open($('#wa').href, '_blank', 'noopener');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    $('#sentb').addEventListener('click', () => {
      Cart.clear();
      $('#co-done').hidden = true;
      $('#co-thanks').hidden = false;
      $('#refno2').textContent = $('#refno').textContent;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    $('#editb').addEventListener('click', () => { $('#co-done').hidden = true; $('#co-main').hidden = false; });
    const sync = () => { const pick = $('input[name=delivery]:checked').value === 'Pickup'; $('#addrbox').hidden = pick; $$('#addrbox input').forEach(i => i.required = !pick && i.name === 'address'); };
    $$('input[name=delivery]').forEach(r => r.addEventListener('change', sync)); sync();
  },

  contact() {
    const sel = new URLSearchParams(location.search).get('service');
    const opts = $$('#service option').map(o => o.value);
    if (sel) $('#service').value = opts.includes(sel) ? sel : 'Other';
    $('#cform').addEventListener('submit', e => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(e.target).entries());
      const msg = `Hello ${CONFIG.name}, I'd like to request a service.\n\nService: ${f.service}\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || '-'}\n\n${f.message}`;
      $('#wa2').href = waLink(msg);
      $('#mail2').href = mailLink('Service request: ' + f.service, msg);
      e.target.hidden = true; $('#cdone').hidden = false;
      window.open($('#wa2').href, '_blank', 'noopener');
    });
    $('#cagain').addEventListener('click', () => { $('#cform').reset(); $('#cform').hidden = false; $('#cdone').hidden = true; });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderChrome();
  const fn = Pages[document.body.dataset.page];
  if (fn) fn();
});
