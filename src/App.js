// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import CartButton from './components/CartBotton';
import SaleSection from './components/salesSec';
import Home from './Pages/Home';
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
        <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
