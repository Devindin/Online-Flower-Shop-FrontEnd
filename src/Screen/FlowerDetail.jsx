// src/Screen/FlowerDetail.jsx
import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { CartContext } from '../context/CartContext';

const FlowerDetail = () => {
  const { id } = useParams();
  const [flower, setFlower] = useState(null);
  const [relatedFlowers, setRelatedFlowers] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFlowerDetail();
  }, [id]);

  const fetchFlowerDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/flowers/${id}`);
      setFlower(response.data);
 // Fetch related flowers
    } catch (error) {
      setError("Failed to fetch flower details");
      console.error(error);
    }
  };

  const fetchRelatedFlowers = async (flowerId) => {
    try {
      const response = await axios.get(`http://localhost:5000/flowers`);
      const flowers = response.data;
      const related = flowers.filter(f => f.id !== flowerId).slice(0, 3);
      setRelatedFlowers(related);
    } catch (error) {
      console.error("Failed to fetch related flowers", error);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!flower) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:5000/cart/addToCart', {
        productId: id,
        quantity
      });
      addToCart(response.data);
      alert(`${flower.title} (x${quantity}) has been added to the cart`);
      setQuantity(1); // Reset quantity input
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };


  return (
    <div className="container mx-auto py-5 px-8 flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row items-start w-full gap-8 mt-10">
        <div className="w-full md:w-1/2">
          <img src={`http://localhost:5000/uploads/${flower.image}`} alt={flower.title} className="w-100 h-70 object-cover rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start p-4 bg-white rounded-lg ">
          <h2 className="text-4xl font-bold mt-4 md:mt-0 mb-10">{flower.title}</h2>
          <p className="text-2xl text-[#91BD3A] font-bold mt-2">Rs.{flower.price}</p>
          <p className="mt-4 text-lg">{flower.description}</p>
          <div className="flex items-center mt-10">
            <label htmlFor="quantity" className="mr-4 text-lg font-bold">Quantity:</label>
            <input 
              type="number" 
              id="quantity" 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1" 
              className="w-20 p-2 border rounded-lg text-center" 
            />
          </div>
          <button 
            onClick={handleAddToCart} 
            className=" px-6 py-3 bg-[#91BD3A] text-white text-lg font-bold rounded-full w-full md:w-64 text-center mt-10">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="w-full mt-16">
        <h3 className="text-3xl font-bold mb-8 text-center text-[#DF2E38]">Related Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedFlowers.map((relatedFlower) => (
            <Link to={`/flower/${relatedFlower.id}`} key={relatedFlower.id}>
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src={`http://localhost:5000/uploads/${relatedFlower.image}`} alt={relatedFlower.title} className="h-48 w-full object-cover rounded-lg" />
                <h3 className="mt-4 text-xl font-bold">{relatedFlower.title}</h3>
                <p className="text-gray-600">{relatedFlower.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlowerDetail;
