# 🛒 Shopping Cart App (React + Redux Toolkit + Tailwind)

A modern Shopping Cart application built using **React**, **Redux Toolkit (RTK)**, and **Tailwind CSS**.
This project includes product listing, cart management, and checkout flow with payment integration (SSLCommerz).

---

Visit: https://shoping-cart-plum-pi.vercel.app/

## 🚀 Features

* 🛍️ View products (from API / json-server)
* ➕ Add to cart
* ➖ Increase / decrease quantity
* 🗑️ Remove item from cart
* 🧮 Auto total price calculation
* 💾 Cart persistence (localStorage)
* 🧾 Order summary page
* 💳 Payment options:

  * Cash on Delivery
  * PayPal (UI)
  * SSLCommerz (integration ready)

---

## 🧠 Tech Stack

* **React** – UI
* **Redux Toolkit** – State management
* **React Router** – Routing
* **Tailwind CSS** – Styling
* **json-server** – Fake backend API
* **SSLCommerz** – Payment gateway (sandbox)

---

## 📂 Project Structure

```id="ps1"
src/
│
├── components/
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│
├── pages/
│   ├── Shop.jsx
│   ├── Cart.jsx
│   ├── AddProduct.jsx
│   ├── OrderSummary.jsx
│
├── features/
│   └── cart/
│       └── cartSlice.js
│
├── redux/
│   └── store.js
│
├── routers/
│   └── router.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

```bash id="ps2"
git clone https://github.com/your-username/shopping-cart-app.git
cd shopping-cart-app
npm install
npm run dev
```

---

## 🗄️ Run json-server

```bash id="ps3"
npx json-server --watch db.json --port 3000
```

---

## 🔁 Redux Flow

```id="ps4"
Component → dispatch(action) → slice → state update → UI re-render
```

---

## 🛒 Cart Logic

* If product exists → increase quantity
* If not → add new item with `quantity = 1`

---

## 💾 Persistence

Cart data is stored in:

```id="ps5"
localStorage
```

👉 So cart remains after page refresh

---

## 💳 Payment Flow (SSLCommerz)

```id="ps6"
Cart → Order Summary → Backend → SSLCommerz → Success Page
```

---

## 📌 Example State

```js id="ps7"
[
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    quantity: 2
  }
]
```

---

## ✨ Future Improvements

* 🔐 User authentication (login/register)
* 🌐 Backend database (MongoDB / MySQL)
* 📦 Order history
* 📱 Responsive mobile UI
* 🔔 Payment verification

---

## 🙌 Author

**Hasib**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
