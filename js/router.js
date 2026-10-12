// Get the current page from the URL hash
export function getCurrentRoute() {
    const hash = window.location.hash || "#/";

    if (hash === "#/" || hash === "#") {
        return "home";
    }

    if (hash.startsWith("#/products")) {
        return "products";
    }

    if (hash === "#/cart") {
        return "cart";
    }

    return "not-found";
}

// Run the page renderer whenever the route changes
export function initRouter(renderPage) {
    window.addEventListener("hashchange", renderPage);

    // Render the initial page
    renderPage();
}
