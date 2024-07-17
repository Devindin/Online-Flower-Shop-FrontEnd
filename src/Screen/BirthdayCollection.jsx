import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import PictureDiv from '../Components/PictureDiv';
import image from '../Images/Birthdaydiv.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const BirthdayCollection = () => {
  const [birthdayFlowers, setBirthdayFlowers] = useState([]);
  const [likedFlowers, setLikedFlowers] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductsByCategory('birthday');
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/flowers/category/${category}`);
      setBirthdayFlowers(response.data);
    } catch (error) {
      setError("Failed to fetch products by category");
      console.error(error);
    }
  };

  const toggleLike = (id) => {
    setLikedFlowers((prevLikedFlowers) => ({
      ...prevLikedFlowers,
      [id]: !prevLikedFlowers[id],
    }));
  };

  return (
    <div className="container mx-auto">
      <PictureDiv 
        image={image}
        category="Birthday Collection"
        description="Celebrate Your Milestone with BloomJoy"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-10">
        {birthdayFlowers.length === 0 ? (
          <p className="text-center text-gray-600 text-lg col-span-3">No flowers available.</p>
        ) : (
          birthdayFlowers.map((product) => (
            <Link to={`/flower/${product._id}`} key={product._id}>
              <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.title} className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">{product.title}</h3>
                      <p className="text-gray-600">{product.price}</p>
                    </div>
                    <button 
                      className="focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLike(product._id);
                      }}
                    >
                      <FontAwesomeIcon 
                        icon={faHeart} 
                        className={`text-xl ${likedFlowers[product._id] ? 'text-red-500' : 'text-gray-400'}`} 
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <p className="mb-10 text-lg leading-relaxed text-center text-gray-700 px-6 mt-20">
        At BloomJoy, we understand that birthdays are special occasions that deserve to be celebrated with beautiful flowers. Our exclusive Birthday Collection is designed to add joy and beauty to your celebrations. Each bouquet and arrangement is crafted to perfection, making your loved one's day extra special.
        <br /><br />
        Whether you're looking to surprise a loved one or add a touch of elegance to your own celebration, our selection offers something for everyone. From the vibrant hues of roses to the timeless elegance of lilies, our flowers are more than just gifts—they are heartfelt messages of love and joy.
        <br /><br />
        Explore our collection and let BloomJoy help you make this birthday unforgettable with floral arrangements as unique and extraordinary as your journey. Because every birthday deserves to be celebrated in full bloom.
      </p>
      <Footer />
    </div>
  );
};

export default BirthdayCollection;
