// src/components/Home.js

import React from 'react';
import Navbar from '../components/Navbar';
import SaleSection from '../components/salesSec';
import CartButton from '../components/CartBotton';
import ProductList from '../components/ProductList';
const Home = () => {
  return (
    <div >
      <SaleSection />
      <CartButton />
      <ProductList />
    </div>
  );
};

export default Home;