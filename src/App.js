// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <header className="bg-blue-600 p-6 text-white text-center shadow-md">
            <h1 className="text-4xl font-bold">My E-commerce Store</h1>
            <nav className="mt-4">
              <Link className="mr-4 text-white hover:underline" to="/">Home</Link>
              <Link className="text-white hover:underline" to="/cart">Cart</Link>
            </nav>
          </header>
          <main className="p-8">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
