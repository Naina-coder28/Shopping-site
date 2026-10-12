const CART_KEY = "shopsphere-cart";

// Load the cart from localStorage
function loadCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

let cart = loadCart();

// Return all cart items
export function getCart() {
    return cart;
}

// Add a product to the cart
export function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
}

// Remove a product completely
export function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

// Calculate the total price
export function getCartTotal() {
    return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}

// Calculate the total number of items
export function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Save cart changes in the browser
function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}