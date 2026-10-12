import { getProducts } from "./api.js";

import {
    getCart,
    addToCart,
    removeFromCart,
    getCartTotal,
    getCartCount
} from "./cart.js";

import {
    getCurrentRoute,
    initRouter
} from "./router.js";

const app = document.querySelector("#app");
const cartCount = document.querySelector("#cart-count");

let products = [];

// Display a message safely
function showMessage(message) {
    app.innerHTML = `<p class="message">${message}</p>`;
}

function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(price);
}

// Update the cart badge
function updateCartCount() {
    cartCount.textContent = getCartCount();
}

// Display the home page
function renderHome() {
    app.innerHTML = `
        <section class="hero">
            <h1>Find Your Next Favourite Thing.</h1>
            <p>
                Discover everyday essentials, stylish accessories,
                and more at ShopSphere.
            </p>
            <a href="#/products" class="button">Explore Products</a>
        </section>

        <section>
            <h2 class="section-title">Welcome to ShopSphere</h2>
            <p>Explore our catalog and find something you love.</p>
            <br>
            <a href="#/products" class="button">Shop Now</a>
        </section>
    `;
}

// Display product cards
function renderProducts() {
    if (products.length === 0) {
        showMessage("No products are available right now.");
        return;
    }

    app.innerHTML = `
        <section>
            <h1 class="section-title">Explore Our Products</h1>
            <div class="product-grid">
                ${products.map(product => `
                    <article class="product-card">
                        <img
                            class="product-image"
                            src="${product.image}"
                            alt="${product.title}"
                            loading="lazy"
                        >
                        <p class="product-category">
                            ${product.category}
                        </p>
                        <h2 class="product-title">${product.title}</h2>
                        <p class="product-price">
                            ${formatPrice(product.price)}
                        </p>
                        <button
                            type="button"
                            data-add="${product.id}"
                        >
                            Add to Cart
                        </button>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

// Display the shopping cart
function renderCart() {
    const items = getCart();

    if (items.length === 0) {
        app.innerHTML = `
            <section>
                <h1 class="section-title">Your Shopping Cart</h1>
                <p class="message">Your cart is empty.</p>
                <a href="#/products" class="button">Browse Products</a>
            </section>
        `;
        return;
    }

    app.innerHTML = `
        <section>
            <h1 class="section-title">Your Shopping Cart</h1>

            <div class="cart-list">
                ${items.map(item => `
                    <article class="cart-item">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="cart-item-details">
                            <h2>${item.title}</h2>
                            <p>${formatPrice(item.price)} each</p>
                            <p>Quantity: ${item.quantity}</p>
                            <p>
                                Subtotal:
                                ${formatPrice(item.price * item.quantity)}
                            </p>
                        </div>
                        <button
                            type="button"
                            class="remove-button"
                            data-remove="${item.id}"
                        >
                            Remove
                        </button>
                    </article>
                `).join("")}
            </div>

            <p class="cart-total">
                Total: ${formatPrice(getCartTotal())}
            </p>

            <br>
            <a href="#/products" class="button">Continue Shopping</a>
        </section>
    `;
}

// Render the correct page
function renderPage() {
    updateCartCount();

    const route = getCurrentRoute();

    if (route === "home") {
        renderHome();
    } else if (route === "products") {
        renderProducts();
    } else if (route === "cart") {
        renderCart();
    } else {
        showMessage("Page not found. Please return to Home.");
    }
}

// Handle clicks on product and cart buttons
app.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add]");
    const removeButton = event.target.closest("[data-remove]");

    if (addButton) {
        const productId = Number(addButton.dataset.add);
        const product = products.find(item => item.id === productId);

        if (product) {
            addToCart(product);
            updateCartCount();

            addButton.textContent = "Added!";
            setTimeout(() => {
                if (addButton.isConnected) {
                    addButton.textContent = "Add to Cart";
                }
            }, 800);
        }
    }

    if (removeButton) {
        const productId = Number(removeButton.dataset.remove);
        removeFromCart(productId);
        renderCart();
        updateCartCount();
    }
});

// Start the application
async function startApp() {
    initRouter(renderPage);

    try {
        products = await getProducts();
        renderPage();
    } catch (error) {
        console.error("ShopSphere error:", error);

        if (getCurrentRoute() === "products") {
            showMessage(
                "We couldn't load products. Please check your internet connection and refresh."
            );
        }
    }
}

startApp();
