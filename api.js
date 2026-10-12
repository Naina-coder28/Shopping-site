const API_URL = "https://fakestoreapi.com/products";

// Fetch all products from the API
export async function getProducts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Unable to fetch products. Please try again.");
    }

    return await response.json();
}

// Fetch one product using its ID
export async function getProductById(id) {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Unable to fetch product details.");
    }

    return await response.json();
}