const products = [
  {
    id: 1,
    name: "Chaqueta Urban",
    category: "women",
    price: 129.99,
    rating: 4.8,
    badge: "Nuevo",
    description: "Chaqueta ligera con corte moderno y gran comodidad para el día a día.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Camisa Linen",
    category: "men",
    price: 89.5,
    rating: 4.7,
    badge: "Top",
    description: "Estilo relajado y fresco, ideal para looks casuales y elegantes.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Bolso de Cuero",
    category: "accessories",
    price: 74.0,
    rating: 4.9,
    badge: "Exclusivo",
    description: "Detalle premium con espacio funcional para tus essentials diarios.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Vestido Midi",
    category: "women",
    price: 109.9,
    rating: 4.8,
    badge: "Popular",
    description: "Diseño sofisticado que combina comodidad, fluidez y estilo atemporal.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "Sudadera Relax",
    category: "men",
    price: 96.0,
    rating: 4.6,
    badge: "Oferta",
    description: "Perfecta para un look casual con una textura suave y moderna.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Gafas Solar",
    category: "accessories",
    price: 59.99,
    rating: 4.7,
    badge: "Trending",
    description: "Lentes de sol con diseño limpio, ligero y listo para cualquier outfit.",
    image: "https://images.unsplash.com/photo-1577803947579-9f5d33b9d9c9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Pantalón Core",
    category: "women",
    price: 99.0,
    rating: 4.8,
    badge: "Best seller",
    description: "Corte elegante y cómodo, ideal para combinar con distintas prendas.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Cazadora Aérea",
    category: "men",
    price: 145.0,
    rating: 4.9,
    badge: "Premium",
    description: "Ajuste estructurado y abrigo ligero para tus días más activos.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9,
    name: "Pulsera Elegance",
    category: "accessories",
    price: 42.5,
    rating: 4.8,
    badge: "Nuevo",
    description: "Accesorio refinado que complementa cualquier look con un toque premium.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    name: "Blazer Studio",
    category: "women",
    price: 165.0,
    rating: 4.9,
    badge: "Editor’s pick",
    description: "Blazer estructurado para looks formales y modernos con gran presencia.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 11,
    name: "Camiseta Essential",
    category: "men",
    price: 65.0,
    rating: 4.7,
    badge: "Casual",
    description: "Camiseta de algodón con corte clásico para usar todos los días.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 12,
    name: "Mochila Minimal",
    category: "accessories",
    price: 88.0,
    rating: 4.8,
    badge: "Lanzamiento",
    description: "Diseño funcional y elegante para desplazarte con estilo y orden.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 13,
    name: "Conjunto Infantil Estelar",
    category: "kids",
    price: 72.0,
    rating: 4.7,
    badge: "Niños",
    description: "Set cómodo y alegre para jugar, estudiar y moverse con libertad.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 14,
    name: "Vestido de niña Luna",
    category: "girls",
    price: 68.5,
    rating: 4.8,
    badge: "Niña",
    description: "Diseño suave y encantador con estilo fresco para cada día.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 15,
    name: "Zapatillas Deportivas Flex",
    category: "shoes",
    price: 94.0,
    rating: 4.9,
    badge: "Zapatos",
    description: "Comodidad y estilo para caminar, correr y moverse sin esfuerzo.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 16,
    name: "Medias Premium Luxe",
    category: "socks",
    price: 18.0,
    rating: 4.6,
    badge: "Accesorio",
    description: "Medias suaves y elegantes para uso diario y looks modernos.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 17,
    name: "Pantalón Cargo Casual",
    category: "men",
    price: 104.0,
    rating: 4.7,
    badge: "Hombre",
    description: "Pantalón cómodo con diseño funcional y moderna silueta urbana.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 18,
    name: "Jersey de Punto Suave",
    category: "women",
    price: 86.0,
    rating: 4.8,
    badge: "Mujer",
    description: "Jersey cálido, suave y perfecto para combinar en cualquier ocasión.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 19,
    name: "Short Niño Active",
    category: "kids",
    price: 52.0,
    rating: 4.7,
    badge: "Niño",
    description: "Short liviano y duradero ideal para actividad y comodidad.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 20,
    name: "Botines Clásicos",
    category: "shoes",
    price: 120.0,
    rating: 4.9,
    badge: "Nuevo",
    description: "Botines con diseño clásico y gran confort para todo el día.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 21,
    name: "Calcetines Mujer Soft",
    category: "socks",
    price: 16.0,
    rating: 4.6,
    badge: "Soft",
    description: "Calcetines suaves, ligeros y perfectos para uso diario.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 22,
    name: "Falda Plegada Bella",
    category: "women",
    price: 92.0,
    rating: 4.8,
    badge: "Elegance",
    description: "Falda femenina con cortes modernos y gran sensación de movimiento.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 23,
    name: "Buzo Niño Comfort",
    category: "kids",
    price: 76.0,
    rating: 4.8,
    badge: "Niños",
    description: "Buzo suave y cálido pensado para la comodidad de tus peques.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 24,
    name: "Sandalias Verano Chic",
    category: "shoes",
    price: 70.0,
    rating: 4.7,
    badge: "Verano",
    description: "Sandalias frescas y cómodas para lucir con estilo en cada salida.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
  }
];

let currentCategory = "all";
const cart = [];

const USERS_KEY = "modamia_users";
const ORDERS_KEY = "modamia_orders";
const CURRENT_USER_KEY = "modamia_current_user";
const ADMIN_ACCOUNT = {
  name: "Administrador",
  email: "admin@modamia.com",
  password: "admin123",
  role: "admin"
};

const productList = document.getElementById("product-list");
const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const subtotal = document.getElementById("subtotal");
const cartToggle = document.getElementById("cart-toggle");
const closeCart = document.getElementById("close-cart");
const toast = document.getElementById("toast");
const filterButtons = document.querySelectorAll(".filter-btn");
const shopNowButton = document.getElementById("shop-now");
const registerForm = document.getElementById("register-form");
const adminLoginForm = document.getElementById("admin-login-form");
const loginForm = document.getElementById("login-form");
const logoutBtn = document.getElementById("logout-btn");
const adminUserList = document.getElementById("admin-user-list");
const totalUsers = document.getElementById("total-users");
const totalOrders = document.getElementById("total-orders");
const currentUserBadge = document.getElementById("current-user-badge");
const adminPanel = document.getElementById("admin-panel");

function getUsers() {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

  if (users.length === 0) {
    localStorage.setItem(USERS_KEY, JSON.stringify([ADMIN_ACCOUNT]));
    return [ADMIN_ACCOUNT];
  }

  return users;
}

function getOrders() {
  return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null");
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

function renderAdminPanel() {
  const users = getUsers();
  const orders = getOrders();
  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.role !== "admin") {
    adminPanel.classList.add("hidden");
    currentUserBadge.textContent = currentUser ? currentUser.name : "Invitado";
    return;
  }

  adminPanel.classList.remove("hidden");
  totalUsers.textContent = String(users.length);
  totalOrders.textContent = String(orders.length);
  currentUserBadge.textContent = currentUser.name;

  adminUserList.innerHTML = users
    .map(
      (user) => `
        <div class="user-row">
          <div>
            <strong>${user.name}</strong>
            <span>${user.email}</span>
          </div>
          <span class="role-pill">${user.role === "admin" ? "Admin" : "Usuario"}</span>
        </div>
      `
    )
    .join("");
}

function formatPrice(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function getVisibleProducts() {
  if (currentCategory === "all") {
    return products;
  }

  return products.filter((product) => product.category === currentCategory);
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();

  productList.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image-wrap">
            <span class="product-badge">${product.badge}</span>
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <span class="product-rating">★ ${product.rating}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
              <span class="product-price">${formatPrice(product.price)}</span>
              <button data-product-id="${product.id}">Agregar</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  productList.querySelectorAll("button[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.productId)));
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  updateCart();
  openCart();
  showToast(`${product.name} añadido al carrito`);
}

function updateCart() {
  const productMap = new Map(products.map((product) => [product.id, product]));

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Tu carrito está vacío.</div>';
    cartCount.textContent = "0";
    subtotal.textContent = "$0";
    return;
  }

  const itemHTML = cart
    .map((item) => {
      const product = productMap.get(item.id);
      const totalItem = product.price * item.quantity;

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" />
          <div class="cart-item-info">
            <h4>${product.name}</h4>
            <p>${product.category}</p>
            <div class="item-controls">
              <div class="qty-controls">
                <button data-action="decrease" data-product-id="${product.id}" aria-label="Disminuir cantidad">-</button>
                <span>${item.quantity}</span>
                <button data-action="increase" data-product-id="${product.id}" aria-label="Aumentar cantidad">+</button>
              </div>
            </div>
          </div>
          <div class="item-price">${formatPrice(totalItem)}</div>
        </div>
      `;
    })
    .join("");

  cartItems.innerHTML = itemHTML;

  cartItems.querySelectorAll("button[data-action]").forEach((button) => {
    button.addEventListener("click", () => changeQuantity(Number(button.dataset.productId), button.dataset.action));
  });

  const total = cart.reduce((sum, item) => {
    const product = productMap.get(item.id);
    return sum + product.price * item.quantity;
  }, 0);

  cartCount.textContent = String(cart.reduce((sum, item) => sum + item.quantity, 0));
  subtotal.textContent = formatPrice(total);
}

function changeQuantity(productId, action) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
  }

  if (item.quantity <= 0) {
    const index = cart.findIndex((entry) => entry.id === productId);
    cart.splice(index, 1);
  }

  updateCart();
}

function openCart() {
  cartPanel.classList.add("open");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;

    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    renderProducts();
  });
});

cartToggle.addEventListener("click", () => {
  cartPanel.classList.toggle("open");
});

closeCart.addEventListener("click", closeCartPanel);

shopNowButton.addEventListener("click", () => {
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío");
    return;
  }

  const currentUser = getCurrentUser();
  const selectedPayment = document.querySelector('input[name="payment-method"]:checked')?.value || "nequi";

  if (!currentUser) {
    showToast("Debes iniciar sesión para comprar");
    return;
  }

  const orders = getOrders();
  const total = cart.reduce((sum, item) => {
    const product = products.find((productItem) => productItem.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  orders.push({
    user: currentUser.email,
    payment: selectedPayment === "nequi" ? "Nequi" : "Efectivo",
    total,
    products: cart,
    date: new Date().toLocaleString()
  });

  saveOrders(orders);
  renderAdminPanel();
  showToast(`Compra realizada con ${selectedPayment === "nequi" ? "Nequi" : "efectivo"}`);
  cart.length = 0;
  updateCart();
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value.trim();

  if (!name || !email || !password) {
    showToast("Completa todos los campos");
    return;
  }

  const users = getUsers();
  const emailExists = users.some((user) => user.email.toLowerCase() === email.toLowerCase());

  if (emailExists) {
    showToast("Este usuario ya existe");
    return;
  }

  if (email.toLowerCase() === ADMIN_ACCOUNT.email.toLowerCase() && password === ADMIN_ACCOUNT.password) {
    showToast("El correo del administrador ya está reservado");
    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: "user"
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  renderAdminPanel();
  registerForm.reset();
  showToast("Usuario creado correctamente");
});

adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("admin-email").value.trim();
  const password = document.getElementById("admin-password").value.trim();

  if (
    email.toLowerCase() === ADMIN_ACCOUNT.email.toLowerCase() &&
    password === ADMIN_ACCOUNT.password
  ) {
    setCurrentUser(ADMIN_ACCOUNT);
    renderAdminPanel();
    adminLoginForm.reset();
    showToast(`Bienvenido ${ADMIN_ACCOUNT.name}`);
    return;
  }

  showToast("Correo o contraseña de administrador incorrectos");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const users = getUsers();

  const user = users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password
  );

  if (!user) {
    showToast("Correo o contraseña incorrectos");
    return;
  }

  setCurrentUser(user);
  renderAdminPanel();
  loginForm.reset();
  showToast(`Bienvenido ${user.name}`);
});

logoutBtn.addEventListener("click", () => {
  setCurrentUser(null);
  renderAdminPanel();
  showToast("Sesión cerrada");
});

renderProducts();
updateCart();
renderAdminPanel();
