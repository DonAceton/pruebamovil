/* ═══════════════════════════════════════════════════
   DON ACETÓN — JAVASCRIPT PREMIUM v2.0
═══════════════════════════════════════════════════ */

'use strict';

// ═══════════════════════════════════
// DATOS DE PRODUCTOS
// ═══════════════════════════════════
const PRODUCTS = [
  { id:1,  nombre:'Sansón 4L',        subtitulo:'Desengrasante industrial',              descripcion:'Disuelve todo tipo de grasas y quita manchas. Ideal para parrillas, campanas, motores, vestiduras de autos y trastes. Fórmula de alta concentración.',                                                                  precio:160, tamaño:'4L',    imagen:'sanson.jpeg',           categoria:'casa',   nuevo:false, hot:true  },
  { id:2,  nombre:'Sansón 500ml',     subtitulo:'Desengrasante fuerte',                  descripcion:'Disuelve todo tipo de grasas y quita manchas. Ideal para parrillas, campanas, motores, vestiduras de autos y trastes. Tamaño práctico para uso diario.',                                                               precio:35,  tamaño:'500ml', imagen:'sanson 5.jpeg',         categoria:'casa',   nuevo:false, hot:false },
  { id:3,  nombre:'Noble Poderoso',   subtitulo:'Desengrasante multiusos',               descripcion:'Germicida, inhibe el crecimiento de hongos y bacterias. Útil en cocinas, baños, pisos, ropa y autos. Elimina olores y deja superficies protegidas.',                                                                   precio:160, tamaño:'4L',    imagen:'Np.jpeg',               categoria:'casa',   nuevo:false, hot:false },
  { id:4,  nombre:'Noble Poderoso 500ml',   subtitulo:'Desengrasante multiusos',               descripcion:'Germicida, inhibe el crecimiento de hongos y bacterias. Útil en cocinas, baños, pisos, ropa y autos. Elimina olores y deja superficies protegidas.',                                                             precio:35, tamaño:'500ml',    imagen:'Np.jpeg',               categoria:'casa',   nuevo:true, hot:false },
  { id:5, nombre:'Oro',              subtitulo:'Lavatrastes concentrado',               descripcion:'Disuelve la grasa, limpia y desodoriza. Espuma abundante, útil para trastes, ropa y más. Fórmula con glicerina que cuida tus manos.',                                                                                   precio:180, tamaño:'4L',    imagen:'or.jpeg',               categoria:'casa',   nuevo:false, hot:false },
  { id:6, nombre:'Oro 500ml',              subtitulo:'Lavatrastes concentrado',               descripcion:'Disuelve la grasa, limpia y desodoriza. Espuma abundante, útil para trastes, ropa y más. Fórmula con glicerina que cuida tus manos.',                                                                             precio:35, tamaño:'500ml',    imagen:'IMG_2519.PNG',               categoria:'casa',   nuevo:true, hot:false },
  { id:7, nombre:'Pino Real',        subtitulo:'Limpiador multiusos',                   descripcion:'Limpia, desinfecta y aromatiza pisos, baños, ropa y toda tu casa. Aroma fresco a pino que perdura por horas.',                                                                                                          precio:120, tamaño:'4L',    imagen:'Pr.jpeg',               categoria:'casa',   nuevo:false, hot:false },
  { id:8, nombre:'Fascinante',       subtitulo:'Limpiador multiusos',                   descripcion:'Limpia, desinfecta y aromatiza pisos, baños, ropa y toda tu casa. Fórmula equilibrada para un resultado brillante.',                                                                                                    precio:120, tamaño:'4L',    imagen:'fc.jpeg',               categoria:'casa',   nuevo:false, hot:false },
  { id:9,  nombre:'Cloro Claro',      subtitulo:'Desinfectante potente',                 descripcion:'Limpia y desinfecta pisos, baños y ropa blanca. Elimina bacterias y gérmenes en toda tu casa con una fórmula de alta concentración.',                                                                                   precio:60,  tamaño:'4L',    imagen:'Cc.jpeg',               categoria:'casa',   nuevo:false, hot:false },
  { id:10, nombre:'Citronela 1L',     subtitulo:'Repelente de insectos',                 descripcion:'Aroma herbáceo que reduce la fatiga y repele insectos naturalmente. Uso ambiental con atomizador. Perfecto para casa, auto, baño, oficina o negocio.',                                                                   precio:130, tamaño:'1L',    imagen:'ctr.jpeg',              categoria:'aromas', nuevo:false, hot:false },
  { id:11, nombre:'Citronela 500ml',  subtitulo:'Repelente de insectos',                 descripcion:'Aroma herbáceo que reduce la fatiga y repele insectos naturalmente. Tamaño práctico para llevar a donde vayas. Uso con atomizador.',                                                                                    precio:65,  tamaño:'500ml', imagen:'ctrch.jpeg',            categoria:'aromas', nuevo:false, hot:false },
  { id:12, nombre:'Coco',             subtitulo:'Aromatizante relajante',                descripcion:'Aroma calmante y relajante que mejora la concentración y genera sensación de bienestar. Ideal para casa, auto, baño, oficina y negocio. Uso con atomizador.',                                                           precio:65,  tamaño:'500ml', imagen:'Coco.jpeg',             categoria:'aromas', nuevo:false,  hot:false },
  { id:13, nombre:'Sándalo',          subtitulo:'Aromatizante amaderado',                descripcion:'Aroma a madera dulce que calma, relaja y armoniza el ambiente. Uso ambiental con atomizador. Perfecto para casa, auto, baño, oficina o negocio.',                                                                       precio:65,  tamaño:'500ml', imagen:'snd.jpeg',              categoria:'aromas', nuevo:false, hot:false },
  { id:14, nombre:'Menta',            subtitulo:'Aromatizante fresco',                   descripcion:'Aroma mentolado intenso y fresco que aclara la mente y relaja. Uso ambiental con atomizador. Ideal para casa, auto, baño, oficina o negocio.',                                                                          precio:65,  tamaño:'500ml', imagen:'mt.jpeg',               categoria:'aromas', nuevo:false, hot:false },
  { id:15, nombre:'Lavanda',          subtitulo:'Aromatizante floral',                   descripcion:'Aroma floral que calma, relaja y tranquiliza. Además repele insectos naturalmente. Uso ambiental con atomizador. Para casa, auto, baño, oficina o negocio.',                                                            precio:65,  tamaño:'500ml', imagen:'Lavanda.jpeg',          categoria:'aromas', nuevo:false, hot:false },
  { id:16, nombre:'Abrillantas',      subtitulo:'Abrillantador para llantas',            descripcion:'Abrillantador para llantas, molduras y tapetes. Resalta el color negro y da brillo duradero. Fórmula con protección UV para mayor durabilidad.',                                                                        precio:240, tamaño:'4L',    imagen:'ab.jpeg',               categoria:'carro',  nuevo:false, hot:false },
  { id:17, nombre:'Abrillantas 500ml',      subtitulo:'Abrillantador para llantas',            descripcion:'Abrillantador para llantas, molduras y tapetes. Resalta el color negro y da brillo duradero. Fórmula con protección UV para mayor durabilidad.',                                                                  precio:40, tamaño:'500ml',    imagen:'IMG_2523.PNG',               categoria:'carro',  nuevo:true, hot:false },
  { id:18, nombre:'Abrillantas Black',      subtitulo:'Abrillantador para llantas',            descripcion:'Abrillantador para llantas, molduras y tapetes. Resalta el color negro y da brillo duradero. Fórmula con protección UV para mayor durabilidad.',                                                                  precio:300, tamaño:'4L',    imagen:'IMG_2524.PNG',               categoria:'carro',  nuevo:true, hot:false },
  { id:19, nombre:'Abrillantas Black',      subtitulo:'Abrillantador para llantas',            descripcion:'Abrillantador para llantas, molduras y tapetes. Resalta el color negro y da brillo duradero. Fórmula con protección UV para mayor durabilidad.',                                                                  precio:50, tamaño:'500ml',    imagen:'IMG_2522.PNG',               categoria:'carro',  nuevo:true, hot:false },
  { id:20, nombre:'El Espumoso',      subtitulo:'Shampoo con efecto encerado',           descripcion:'Lavado a la alta espuma con efecto de encerado incluido. Protege la pintura de tu auto y deja un brillo espectacular. Ideal para autos, camionetas y motos.',                                                           precio:240, tamaño:'4L',    imagen:'sh.jpeg',               categoria:'carro',  nuevo:false,  hot:false  },
  { id:21, nombre:'El Espumoso 500ml',      subtitulo:'Shampoo con efecto encerado',           descripcion:'Lavado a la alta espuma con efecto de encerado incluido. Protege la pintura de tu auto y deja un brillo espectacular. Ideal para autos, camionetas y motos.',                                                           precio:40, tamaño:'500ml',    imagen:'sh.jpeg',               categoria:'carro',  nuevo:true,  hot:false  },
  { id:22, nombre:'El Cremas',        subtitulo:'Abrillantador para interiores',         descripcion:'Limpia en seco y da brillo original. Útil en piel, plástico, vinil, hule, autos, camionetas, RZR y motocicletas. Sin residuo grasoso.',                                                                                 precio:52,  tamaño:'500ml', imagen:'elc.jpeg',              categoria:'carro',  nuevo:false, hot:false },
  { id:23, nombre:'Crema Hidratante', subtitulo:'Manos y pies',                          descripcion:'Extracto de hierbas naturales y aceite natural de coco. Humectante, suavizante y antisequedad. Fórmula de absorción rápida sin dejar sensación grasosa.',                                                               precio:160, tamaño:'500ml', imagen:'crema.jpeg',            categoria:'cremas', nuevo:false, hot:false },
  { id:24, nombre:'Crema Hidratante ', subtitulo:'Manos y pies',                          descripcion:'Extracto de hierbas naturales y aceite natural de coco. Humectante, suavizante y antisequedad. Fórmula de absorción rápida sin dejar sensación grasosa.',                                                         precio:80, tamaño:'250ml', imagen:'IMG_2520.PNG',            categoria:'cremas', nuevo:true, hot:false },
  { id:25,  nombre:'Atomizador',       subtitulo:'Atomizador multiusos',                  descripcion:'Ideal para aplicar limpiadores, aromatizantes o sanitizantes. Produce una bruma fina y uniforme para cubrir superficies de forma práctica en casa, auto o negocio.',                                                     precio:40,  tamaño:'1L',    imagen:'atomizador.jpeg',       categoria:'casa',   nuevo:false, hot:false },
  { id:26,  nombre:'Bote 50L',         subtitulo:'Contenedor de 50 Litros',               descripcion:'Almacena agua, químicos, detergentes o líquidos de limpieza. Fabricado con material duradero, ideal para negocios, talleres o uso doméstico.',                                                                         precio:160, tamaño:'50L',   imagen:'bote.jpeg',             categoria:'casa',   nuevo:false, hot:true },
  { id:27,  nombre:'Bote 200L',        subtitulo:'Contenedor grado alimenticio',          descripcion:'Almacena agua potable, comidas, detergentes o líquidos de limpieza. Fabricado con material duradero, ideal para negocios, talleres, hogares o uso doméstico.',                                                          precio:800, tamaño:'200L',  imagen:'IMG_1772.PNG',          categoria:'casa',   nuevo:false, hot:false  },
  { id:28,  nombre:'Escoba',           subtitulo:'Cerdas resistentes',                    descripcion:'Barre pisos interiores y exteriores. Ideal para recoger polvo, tierra y residuos, dejando superficies limpias en casa, negocio o taller.',                                                                             precio:90,  tamaño:'1 pza', imagen:'escoba (1).jpg',        categoria:'casa',   nuevo:false, hot:false },
  { id:29,  nombre:'Trapeador',        subtitulo:'Absorbente profesional',                descripcion:'Ideal para pisos de cerámica, cemento o áreas comerciales. Limpia derrames, retira suciedad y deja las superficies con un acabado fresco y uniforme.',                                                                  precio:110, tamaño:'1 pza', imagen:'trapeador (1).jpeg',    categoria:'casa',   nuevo:false, hot:false },

];

const CAT_LABELS = { casa:'Casa', aromas:'Aromas', carro:'Auto', cremas:'Cremas' };
const PHONE = '529191437135';

// ═══════════════════════════════════
// ESTADO
// ═══════════════════════════════════
const state = {
  category: 'todos',
  sort: 'default',
  query: '',
  cart: [],
  favorites: new Set(),
  viewList: false,
  currentProduct: null,
};

// ═══════════════════════════════════
// DOM REFS
// ═══════════════════════════════════
const $ = id => document.getElementById(id);
const DOM = {
  // Navbar
  navbar:         document.querySelector('.navbar'),
  searchInput:    $('searchInput'),
  searchClear:    $('searchClear'),
  searchToggle:   $('searchToggleBtn'),
  searchWrap:     $('searchWrap'),
  catPills:       document.querySelectorAll('.cat-pill'),
  // Products
  productsGrid:   $('productsGrid'),
  noResults:      $('noResults'),
  resultsCount:   $('resultsCount'),
  sortSelect:     $('sortSelect'),
  viewGrid:       $('viewGrid'),
  viewList:       $('viewList'),
  // Cart
  cartBtn:        $('cartBtn'),
  cartCount:      $('cartCount'),
  cartDrawer:     $('cartDrawer'),
  drawerOverlay:  $('drawerOverlay'),
  closeCart:      $('closeCart'),
  cartBody:       $('cartBody'),
  cartList:       $('cartList'),
  cartEmpty:      $('cartEmpty'),
  cartFooter:     $('cartFooter'),
  cartItemsCount: $('cartItemsCount'),
  cartSubtotal:   $('cartSubtotal'),
  cartTotal:      $('cartTotal'),
  checkoutBtn:    $('checkoutBtn'),
  clearCartBtn:   $('clearCartBtn'),
  continueShopping: $('continueShopping'),
  // Modal
  productModal:   $('productModal'),
  modalOverlay:   $('modalOverlay'),
  modalClose:     $('modalClose'),
  modalImg:       $('modalImg'),
  modalTitle:     $('modalTitle'),
  modalSubtitle:  $('modalSubtitle'),
  modalPrice:     $('modalPrice'),
  modalSize:      $('modalSize'),
  modalCat:       $('modalCat'),
  modalBadges:    $('modalBadges'),
  modalDesc:      $('modalDescription'),
  qtyInput:       $('qtyInput'),
  qtyMinus:       $('qtyMinus'),
  qtyPlus:        $('qtyPlus'),
  addToCartBtn:   $('addToCartBtn'),
  waDirectBtn:    $('whatsappDirectBtn'),
  // Misc
  promoBanner:    $('promoBanner'),
  promoClose:     $('promoClose'),
  scrollTop:      $('scrollTop'),
  toastContainer: $('toastContainer'),
};

// ═══════════════════════════════════
// INIT
// ═══════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  loadPersistedData();
  renderProducts();
  updateCartUI();
  initGridDelegation(); // ← delegación de eventos en cards
  bindEvents();
  initScrollBehavior();
  initRevealObserver();
  initStatsCounter();
});

// ═══════════════════════════════════
// PERSIST
// ═══════════════════════════════════
function loadPersistedData() {
  try {
    const savedCart = localStorage.getItem('da_cart_v2');
    if (savedCart) state.cart = JSON.parse(savedCart);
    const savedFavs = localStorage.getItem('da_favs');
    if (savedFavs) state.favorites = new Set(JSON.parse(savedFavs));
  } catch(e) { /* fail silently */ }
}
function persist() {
  try {
    localStorage.setItem('da_cart_v2', JSON.stringify(state.cart));
    localStorage.setItem('da_favs', JSON.stringify([...state.favorites]));
  } catch(e) {}
}

// ═══════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════
function getFiltered() {
  let list = [...PRODUCTS];

  if (state.category !== 'todos') list = list.filter(p => p.categoria === state.category);
  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.subtitulo.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q)
    );
  }
  switch(state.sort) {
    case 'price-low':  list.sort((a,b) => a.precio - b.precio); break;
    case 'price-high': list.sort((a,b) => b.precio - a.precio); break;
    case 'name':       list.sort((a,b) => a.nombre.localeCompare(b.nombre, 'es')); break;
    case 'new':        list.sort((a,b) => (b.nuevo - a.nuevo) || (b.hot - a.hot)); break;
  }
  return list;
}

function renderProducts() {
  const list = getFiltered();
  DOM.resultsCount.textContent = `${list.length} producto${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    DOM.productsGrid.innerHTML = '';
    DOM.noResults.classList.remove('hidden');
    return;
  }
  DOM.noResults.classList.add('hidden');
  DOM.productsGrid.innerHTML = list.map((p, i) => cardHTML(p, i)).join('');
  DOM.productsGrid.classList.toggle('list-view', state.viewList);
}

// ── Delegación de eventos en el grid ──
// Un solo listener en el contenedor para todos los productos.
// Usamos 'click' que en móvil moderno funciona en un solo tap
// siempre que no haya capas de hover bloqueando (ya resuelto con CSS).
function initGridDelegation() {
  DOM.productsGrid.addEventListener('click', e => {
    // Botón añadir al carrito
    const addBtn = e.target.closest('[data-action="add"]');
    if (addBtn) { quickAdd(parseInt(addBtn.dataset.pid)); return; }

    // Botón favorito
    const favBtn = e.target.closest('[data-action="fav"]');
    if (favBtn) { toggleFav(parseInt(favBtn.dataset.pid), favBtn); return; }

    // Botón compartir
    const shareBtn = e.target.closest('[data-action="share"]');
    if (shareBtn) { shareProduct(parseInt(shareBtn.dataset.pid)); return; }

    // Click en la card en sí → abrir modal
    const card = e.target.closest('.product-card');
    if (card) { openModal(parseInt(card.dataset.id)); }
  });

  // En dispositivos táctiles: usar touchend para respuesta inmediata
  // sin esperar el delay de 300ms que iOS añade al evento click
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (isTouch) {
    let touchMoved = false;
    DOM.productsGrid.addEventListener('touchstart', () => { touchMoved = false; }, { passive: true });
    DOM.productsGrid.addEventListener('touchmove',  () => { touchMoved = true;  }, { passive: true });
    DOM.productsGrid.addEventListener('touchend', e => {
      if (touchMoved) return; // fue un scroll, no un tap

      const addBtn   = e.target.closest('[data-action="add"]');
      const favBtn   = e.target.closest('[data-action="fav"]');
      const shareBtn = e.target.closest('[data-action="share"]');
      const card     = e.target.closest('.product-card');

      if (addBtn || favBtn || shareBtn) return; // dejar que el click maneje los botones

      if (card) {
        e.preventDefault(); // prevenir el click duplicado de iOS
        openModal(parseInt(card.dataset.id));
      }
    }, { passive: false });
  }
}

function cardHTML(p, i) {
  const isFav = state.favorites.has(p.id);
  const badge = p.nuevo
    ? `<span class="card-badge badge-new">Nuevo</span>`
    : p.hot
    ? `<span class="card-badge badge-hot">Popular</span>`
    : '';

  // ── IMPORTANTE: no usamos onclick directamente en el article ──
  // En iOS Safari, elementos con :hover que muestran capas (card-actions)
  // requieren un primer tap para activar el hover y un segundo para el click.
  // La solución: usar data-id y delegar el evento desde el grid container,
  // usando 'touchend' en táctil y 'click' en desktop.
  return `
    <article class="product-card" style="animation-delay:${i * 35}ms" data-id="${p.id}">
      <div class="card-img">
        ${badge}
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" draggable="false">
        <div class="card-actions">
          <button class="card-action-btn ${isFav ? 'favorited' : ''}"
                  data-action="fav" data-pid="${p.id}"
                  aria-label="Favorito">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <button class="card-action-btn"
                  data-action="share" data-pid="${p.id}"
                  aria-label="Compartir">
            <i class="fas fa-share-nodes"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <span class="card-cat">${CAT_LABELS[p.categoria] || p.categoria}</span>
        <h3 class="card-name">${p.nombre}</h3>
        <p class="card-subtitle">${p.subtitulo}</p>
        <div class="card-footer">
          <div class="card-price-wrap">
            <span class="card-price">$${p.precio}</span>
            <span class="card-size">${p.tamaño}</span>
          </div>
          <button class="card-add-btn"
                  data-action="add" data-pid="${p.id}"
                  aria-label="Agregar al carrito">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

// ═══════════════════════════════════
// MODAL
// ═══════════════════════════════════
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  state.currentProduct = p;

  DOM.modalImg.src       = p.imagen;
  DOM.modalImg.alt       = p.nombre;
  DOM.modalTitle.textContent    = p.nombre;
  DOM.modalSubtitle.textContent = p.subtitulo;
  DOM.modalPrice.textContent    = `$${p.precio}`;
  DOM.modalSize.textContent     = p.tamaño;
  DOM.modalCat.textContent      = CAT_LABELS[p.categoria] || p.categoria;
  DOM.modalDesc.textContent     = p.descripcion;
  DOM.qtyInput.value = 1;

  // Badges
  const badges = [];
  if (p.nuevo) badges.push(`<span class="card-badge badge-new">Nuevo</span>`);
  if (p.hot)   badges.push(`<span class="card-badge badge-hot">Popular</span>`);
  DOM.modalBadges.innerHTML = badges.join('');

  // WhatsApp link
  const msg = encodeURIComponent(`Hola, me interesa el producto: *${p.nombre}* (${p.tamaño}) — $${p.precio}`);
  DOM.waDirectBtn.href = `https://wa.me/${PHONE}?text=${msg}`;

  DOM.productModal.classList.add('open');
  DOM.modalOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  DOM.productModal.classList.remove('open');
  DOM.modalOverlay.classList.remove('show');
  document.body.style.overflow = '';
  state.currentProduct = null;
}

// ═══════════════════════════════════
// CART
// ═══════════════════════════════════
function quickAdd(id) {
  addToCart(id, 1);
}

function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = state.cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id, qty, nombre: product.nombre, precio: product.precio, tamaño: product.tamaño, imagen: product.imagen });
  }

  persist();
  updateCartUI();
  showToast('success', '¡Agregado!', `${product.nombre} en tu carrito`);

  if (state.currentProduct) closeModal();

  // Animate cart button
  DOM.cartBtn.style.transform = 'scale(1.25)';
  setTimeout(() => DOM.cartBtn.style.transform = '', 300);
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  persist();
  updateCartUI();
  showToast('success', 'Eliminado', 'Producto removido del carrito');
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  persist();
  updateCartUI();
}

function clearCart() {
  if (!state.cart.length) return;
  state.cart = [];
  persist();
  updateCartUI();
  showToast('success', 'Carrito vaciado', 'Todos los productos fueron removidos');
}

function updateCartUI() {
  const total     = state.cart.reduce((s, i) => s + i.qty, 0);
  const subtotal  = state.cart.reduce((s, i) => s + i.precio * i.qty, 0);

  // Badge
  DOM.cartCount.textContent = total;
  DOM.cartCount.style.display = total > 0 ? 'flex' : 'none';

  // Items count label
  DOM.cartItemsCount.textContent = `${total} producto${total !== 1 ? 's' : ''}`;

  // Empty / filled state
  if (state.cart.length === 0) {
    DOM.cartEmpty.style.display = 'flex';
    DOM.cartList.innerHTML = '';
    DOM.cartFooter.style.display = 'none';
  } else {
    DOM.cartEmpty.style.display = 'none';
    DOM.cartFooter.style.display = 'block';

    DOM.cartList.innerHTML = state.cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="ci-img">
          <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
        </div>
        <div class="ci-info">
          <p class="ci-name">${item.nombre}</p>
          <p class="ci-size">${item.tamaño}</p>
          <div class="ci-bottom">
            <span class="ci-price">$${item.precio * item.qty}</span>
            <div class="ci-qty">
              <button class="ci-qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Reducir">
                <i class="fas fa-minus"></i>
              </button>
              <span class="ci-qty-num">${item.qty}</span>
              <button class="ci-qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Aumentar">
                <i class="fas fa-plus"></i>
              </button>
              <button class="ci-remove" onclick="removeFromCart(${item.id})" aria-label="Eliminar">
                <i class="fas fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    DOM.cartSubtotal.textContent = `$${subtotal}`;
    DOM.cartTotal.textContent    = `$${subtotal}`;
  }
}

function openCart() {
  DOM.cartDrawer.classList.add('open');
  DOM.drawerOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  DOM.cartDrawer.classList.remove('open');
  DOM.drawerOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

function checkout() {
  if (!state.cart.length) return;
  let msg = 'Hola, quiero hacer el siguiente pedido:\n\n';
  state.cart.forEach(i => {
    msg += `• ${i.nombre} (${i.tamaño}) ×${i.qty} = $${i.precio * i.qty}\n`;
  });
  const total = state.cart.reduce((s, i) => s + i.precio * i.qty, 0);
  msg += `\n*Total: $${total}*`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ═══════════════════════════════════
// FAVORITES
// ═══════════════════════════════════
function toggleFav(id, btn) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    btn.classList.remove('favorited');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast('success', 'Eliminado de favoritos', '');
  } else {
    state.favorites.add(id);
    btn.classList.add('favorited');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast('success', '¡Guardado!', 'Agregado a tus favoritos');
  }
  persist();
}

// ═══════════════════════════════════
// SHARE
// ═══════════════════════════════════
function shareProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const msg = `¡Mira este producto de Don Acetón! *${p.nombre}* (${p.tamaño}) — $${p.precio}`;
  if (navigator.share) {
    navigator.share({ title: `Don Acetón — ${p.nombre}`, text: msg, url: window.location.href }).catch(() => {});
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  }
}

// ═══════════════════════════════════
// SEARCH HELPERS
// ═══════════════════════════════════
function clearSearch() {
  DOM.searchInput.value = '';
  state.query = '';
  DOM.searchClear.classList.remove('visible');
  renderProducts();
}

// ═══════════════════════════════════
// TOAST
// ═══════════════════════════════════
function showToast(type, title, body) {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `
    <span class="toast-icon"><i class="fas fa-${type === 'success' ? 'circle-check' : 'circle-exclamation'}"></i></span>
    <div class="toast-text">
      <strong>${title}</strong>
      ${body ? `<span>${body}</span>` : ''}
    </div>
    <div class="toast-bar"></div>
  `;
  DOM.toastContainer.prepend(t);

  setTimeout(() => {
    t.classList.add('out');
    t.addEventListener('animationend', () => t.remove(), { once: true });
  }, 3200);
}

// ═══════════════════════════════════
// SCROLL BEHAVIOR
// ═══════════════════════════════════
function initScrollBehavior() {
  let ticking = false;

  const handle = () => {
    const y      = window.scrollY;
    const mobile = window.innerWidth <= 768;

    DOM.navbar.classList.toggle('elevated', y > 20);
    DOM.navbar.classList.toggle('glass', y > 40 && !mobile);

    if (mobile) {
      DOM.navbar.classList.toggle('compact', y > 80);
      // Al volver al top, cerrar búsqueda
      if (y < 80) closeSearchBar();
    } else {
      DOM.navbar.classList.remove('compact', 'search-open');
    }

    DOM.scrollTop.classList.toggle('show', y > 400);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(handle); ticking = true; }
  }, { passive: true });

  // ── Botón de búsqueda: funciona siempre en móvil,
  //    no solo cuando está compacto ──
  DOM.searchToggle.addEventListener('click', () => {
    const isOpen = DOM.navbar.classList.toggle('search-open');
    if (isOpen) {
      // Pequeño delay para que la animación CSS termine antes del focus
      setTimeout(() => {
        DOM.searchInput.focus();
        // En iOS el teclado virtual sube: ajustar scroll para que el buscador sea visible
        DOM.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 320);
    } else {
      DOM.searchInput.blur();
    }
  });

  // Cerrar búsqueda al perder foco solo si está vacía
  DOM.searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      // Solo cerrar si el input sigue vacío y el usuario no hizo click en el limpiar
      if (!DOM.searchInput.value && window.innerWidth <= 768) {
        closeSearchBar();
      }
    }, 250);
  });

  DOM.scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function closeSearchBar() {
  DOM.navbar.classList.remove('search-open');
}

// ═══════════════════════════════════
// SCROLL REVEAL (IntersectionObserver)
// ═══════════════════════════════════
function initRevealObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ═══════════════════════════════════
// STATS COUNTER ANIMATION
// ═══════════════════════════════════
function initStatsCounter() {
  const nums = document.querySelectorAll('.stat-num');
  if (!nums.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 30);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  nums.forEach(n => obs.observe(n));
}

// ═══════════════════════════════════
// BIND EVENTS
// ═══════════════════════════════════
function bindEvents() {

  // ── Search ──
  let searchTimer;
  DOM.searchInput.addEventListener('input', e => {
    const val = e.target.value;
    DOM.searchClear.classList.toggle('visible', val.length > 0);
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = val.trim();
      renderProducts();
    }, 240);
  });
  DOM.searchClear.addEventListener('click', clearSearch);

  // ── Sort ──
  DOM.sortSelect.addEventListener('change', e => {
    state.sort = e.target.value;
    renderProducts();
  });

  // ── Categories ──
  DOM.catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.category = pill.dataset.category;
      renderProducts();
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── View toggle ──
  DOM.viewGrid.addEventListener('click', () => {
    state.viewList = false;
    DOM.viewGrid.classList.add('active');
    DOM.viewList.classList.remove('active');
    renderProducts();
  });
  DOM.viewList.addEventListener('click', () => {
    state.viewList = true;
    DOM.viewList.classList.add('active');
    DOM.viewGrid.classList.remove('active');
    renderProducts();
  });

  // ── Cart ──
  DOM.cartBtn.addEventListener('click', openCart);
  DOM.closeCart.addEventListener('click', closeCartDrawer);
  DOM.drawerOverlay.addEventListener('click', closeCartDrawer);
  DOM.checkoutBtn.addEventListener('click', checkout);
  DOM.clearCartBtn.addEventListener('click', clearCart);
  DOM.continueShopping.addEventListener('click', () => {
    closeCartDrawer();
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
  });

  // ── Modal ──
  DOM.modalClose.addEventListener('click', closeModal);
  DOM.modalOverlay.addEventListener('click', closeModal);

  DOM.qtyMinus.addEventListener('click', () => {
    const v = parseInt(DOM.qtyInput.value);
    if (v > 1) DOM.qtyInput.value = v - 1;
  });
  DOM.qtyPlus.addEventListener('click', () => {
    DOM.qtyInput.value = parseInt(DOM.qtyInput.value) + 1;
  });
  DOM.qtyInput.addEventListener('input', () => {
    let v = parseInt(DOM.qtyInput.value);
    if (isNaN(v) || v < 1) DOM.qtyInput.value = 1;
    if (v > 99) DOM.qtyInput.value = 99;
  });
  DOM.addToCartBtn.addEventListener('click', () => {
    if (state.currentProduct) addToCart(state.currentProduct.id, parseInt(DOM.qtyInput.value) || 1);
  });

  // ── Promo Banner ──
  DOM.promoClose.addEventListener('click', () => {
    DOM.promoBanner.classList.add('hidden');
  });

  // ── Footer category links ──
  document.querySelectorAll('.footer-col a[data-category]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const cat = link.dataset.category;
      DOM.catPills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === cat);
      });
      state.category = cat;
      renderProducts();
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ── Hero button ──
  const heroPrimary = document.querySelector('.btn-hero-primary');
  if (heroPrimary) {
    heroPrimary.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ── Keyboard ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (DOM.productModal.classList.contains('open')) closeModal();
      else if (DOM.cartDrawer.classList.contains('open')) closeCartDrawer();
      else if (DOM.navbar.classList.contains('search-open')) {
        DOM.navbar.classList.remove('search-open');
        DOM.searchToggle.classList.remove('active');
      }
    }
    // '/' para enfocar búsqueda
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      DOM.searchInput.focus();
    }
  });

  // ── Touch: swipe to close drawer ──
  let touchStartX = 0;
  DOM.cartDrawer.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  DOM.cartDrawer.addEventListener('touchend', e => {
    if (e.changedTouches[0].clientX - touchStartX > 80) closeCartDrawer();
  }, { passive: true });
}

console.log(`✅ Don Acetón v2.0 — ${PRODUCTS.length} productos cargados`);