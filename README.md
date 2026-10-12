# 🛍️ ShopSphere — E-Commerce Product Catalog

ShopSphere is a responsive e-commerce product catalog built as a Web Development Capstone Project. It allows users to explore products fetched from a public API, navigate between pages without full-page reloads, and manage a shopping cart that persists across browser refreshes.

🔗 **Live Demo:** [Visit ShopSphere](https://shopping-site-green.vercel.app/)

## ✨ Features

- **Product Catalog:** Fetch and display product information, images, categories, and prices using the Fake Store API.
- **Client-Side Routing:** Navigate between Home, Products, and Cart pages using JavaScript hash-based routing.
- **Shopping Cart:** Add products, increase quantities, remove products, and calculate the cart total.
- **Persistent Storage:** Store cart data in browser `localStorage` so it remains available after refreshing the page.
- **Responsive Design:** Adapt the interface to different screen sizes.
- **Modular Architecture:** Organize JavaScript into separate modules for API requests, routing, cart operations, and application logic.
- **User-Friendly Interface:** Simple navigation, product cards, interactive buttons, and clear pricing.

## 🛠️ Technologies Used

- **HTML5** — Semantic page structure
- **CSS3** — Responsive layouts, styling, and hover effects
- **JavaScript (ES6+)** — Application logic, modules, event handling, and asynchronous operations
- **Fake Store API** — Sample product data
- **localStorage** — Persistent shopping cart data
- **Git and GitHub** — Version control and source code hosting
- **Vercel** — Deployment and hosting

## 📁 Project Structure

```text
Shopping-site/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── app.js
    ├── api.js
    ├── cart.js
    └── router.js
```

## 🌐 API Used

**Fake Store API**

Endpoint: https://fakestoreapi.com/products

The application fetches sample product data from this endpoint, including product titles, prices, categories, descriptions, and image URLs.

## 🚀 Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Naina-coder28/Shopping-site.git
   ```

2. Open the project folder:

   ```bash
   cd Shopping-site
   ```

3. Open the folder in Visual Studio Code.

4. Install the **Live Server** extension if you haven't already.

5. Right-click `index.html` and select **Open with Live Server**.

The application will open in your browser. An internet connection is required to fetch product data from the API.

## 🛒 How to Use

1. Open the home page.
2. Navigate to **Products** to explore the catalog.
3. Click **Add to Cart** to add a product.
4. Open **Cart** to view quantities and the total price.
5. Use **Remove** to remove a product from the cart.
6. Refresh the page to verify that cart data persists.

## 📌 Project Notes

- Product information is supplied by a public demo API.
- Prices are displayed using Indian Rupee formatting, but the API's sample prices are not converted into actual INR values.
- Cart data is stored locally in the browser.
- This project does not include a custom backend, user authentication, payment processing, or real order placement.

## 🎯 Learning Outcomes

Through this project, I practised:

- Building a modular frontend application
- Fetching and handling API data with `async`/`await`
- Implementing client-side routing
- Managing application state and DOM events
- Persisting data with `localStorage`
- Designing responsive interfaces
- Deploying a web application using Vercel

## 👩‍💻 Author

**Naina Gangwar**

B.Tech Computer Science and Engineering — AI Specialization

GitHub: [Naina-coder28](https://github.com/Naina-coder28)

---

*Built with curiosity, consistency, and a passion for learning web development.* 
