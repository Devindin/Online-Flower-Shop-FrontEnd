import React, { useContext, useState ,useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Components/Footer';
import axios from 'axios';

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const { cart, removeFromCart } = useContext(CartContext);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: '',
    email: '',
    contact: '',
    deliveryDate: '',
    paymentMethod: 'Credit Card',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    if (!localStorage.getItem('token')) {
      setError('Please log in to place an order.');
      return;
    }
    setError(''); // Clear any previous errors
    setShowPopup(true);
  };

  const confirmOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/orders', {
        billingDetails,
        cart,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status !== 201) {
        throw new Error('Failed to place the order.');
      }

      alert('Order placed successfully!');
      navigate('/'); // Navigate to the home page or orders page after successful order
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place the order. Please try again.');
    } finally {
      setShowPopup(false); // Close the popup
    }
  };

  return (
    <div className="container mx-auto  flex flex-col">
      <Header />
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-2/3 bg-white p-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Shopping Cart <FontAwesomeIcon icon={faShoppingCart} /></h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600">Rs.{item.price} x {item.quantity}</p>
                    <p className="text-gray-600">Total: Rs.{item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))
          )}
          <div className="mt-4">
            <h3 className="text-2xl font-bold">Total: Rs.{total}</h3>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Billing Details</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={billingDetails.name}
              onChange={handleBillingChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingDetails.address}
              onChange={handleBillingChange}
              className="p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingDetails.email}
              onChange={handleBillingChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={billingDetails.contact}
              onChange={handleBillingChange}
              className="p-2 border rounded"
            />
            <input
              type="date"
              name="deliveryDate"
              placeholder="Delivery Date"
              value={billingDetails.deliveryDate}
              onChange={handleBillingChange}
              className="p-2 border rounded"
            />
            <select
              name="paymentMethod"
              value={billingDetails.paymentMethod}
              onChange={handleBillingChange}
              className="p-2 border rounded"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </form>
          <button
            onClick={handleCheckout}
            className="bg-[#91BD3A] text-white px-4 py-2 rounded mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to place this order?</p>
            <button
              onClick={confirmOrder}
              className="bg-green-600 text-white px-4 py-2 rounded mr-2"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CartPage;
