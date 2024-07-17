import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const { order } = location.state || {};
  const navigate = useNavigate();

  if (!order) {
    return <p>No order details found.</p>;
  }

  return (
    <div className="container mx-auto py-5 px-8">
      <h1 className="text-3xl font-bold mb-8">Order Success</h1>
      <p className="text-xl mb-4">Thank you for your order! Your order details are as follows:</p>
      <div className="bg-green-200 p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Contact:</strong> {order.contact}</p>
        <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
        <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
        <h3 className="text-xl font-bold mt-4">Items Ordered:</h3>
        <ul>
          {order.cart.map(item => (
            <li key={item.id}>
              {item.title} - {item.quantity} x {item.price}
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold mt-4">Total: ${order.cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2)}</p>
      </div>
      <p className="text-lg mt-4">We will notify you as soon as your order is ready for delivery.</p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 bg-[#91BD3A] text-white py-2 px-4 rounded"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;
