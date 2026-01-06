# 🍕 Fast Pizza Co.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**Live Demo:** [https://fasstpizza.netlify.app/](https://fasstpizza.netlify.app/)

## 📋 Project Overview

Fast Pizza Co. is a reactive, single-page food ordering application designed for speed and simplicity. Users can browse a menu, manage a global cart, and place orders without requiring a user account.

The project demonstrates a modern **React architecture**, specifically focusing on the separation of **Client State** (managed by Redux) and **Remote State** (managed by React Router v6.4+ Data Loaders).

## ✨ Key Features

- **Menu Browsing:** Fetches data from a REST API to display available pizzas.
- **Global Cart Management:** Add/remove items, adjust quantities, and clear cart (Redux).
- **Geolocation Integration:** Auto-detects user address using the browser's Geolocation API (via Redux Thunks).
- **Order Creation:** seamless POST requests to the backend API.
- **Order Priority:** Users can prioritize orders (PATCH request) for faster delivery.
- **Order Lookup:** Users can search for existing orders by ID.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop using Tailwind CSS.

## 🛠 Tech Stack

- **Frontend:** React 19
- **Routing:** React Router v6.4+ (utilizing the new Data Router APIs)
- **State Management:** Redux Toolkit (Slices & Thunks)
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## 🧠 Architectural Highlights & Decisions

### 1. "Render-as-you-fetch" Pattern

Instead of using the traditional `useEffect` hook to fetch data (which causes "waterfall" loading issues), I utilized **React Router Loaders**. This ensures data is fetched _in parallel_ with route matching, resulting in significantly faster page loads and a smoother UX.

### 2. State Management Strategy

I implemented a hybrid state management approach to keep the codebase clean:

- **Redux Toolkit:** Used strictly for **Global Client State** (Shopping Cart, User Name). This allows the cart to persist and be accessible from any component.
- **React Router Loaders:** Used for **Remote Server State** (Menu Data, Order Status). This decouples the UI from the API layer.

### 3. Geolocation & Async Logic

I leveraged **Thunks** to handle the asynchronous logic required for the Geolocation API. This includes handling loading states, errors (e.g., user denied location), and reverse-geocoding coordinates into a readable address string.

### 4. Form Management

Used React Router's `<Form>` component and **Actions** to handle form submissions. This allows for declarative code that automatically handles request cancellation and re-validation without manually managing extensive `useState` for input fields.

## 🚀 How to Run Locally

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/your-username/fast-pizza.git](https://github.com/your-username/fast-pizza.git)
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

---
