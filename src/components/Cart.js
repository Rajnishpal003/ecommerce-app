// src/components/Cart.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Calculate the total amount
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment process
    setPaymentSuccess(true);
  };

  return (
    <div className="mt-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                </div>
                <button 
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <h3 className="text-2xl font-bold">Total: ${totalAmount.toFixed(2)}</h3>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            {paymentSuccess ? (
              <p className="text-green-500">Payment Successful! Thank you for your purchase.</p>
            ) : (
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="block text-gray-700">Payment Method</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1 p-2 border rounded"
                    required
                  >
                    <option value="">Select a payment method</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Bank Transfer</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Pay ${totalAmount.toFixed(2)}
                </button>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
