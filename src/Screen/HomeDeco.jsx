// src/Screen/GraduationCollection.jsx
import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import flowers from '../FlowerData';
import Footer from '../Components/Footer';
import PictureDiv from '../Components/PictureDiv';
import image from '../Images/image2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const HomeDeco = () => {

  const [likedFlowers, setLikedFlowers] = useState({});
  const [homeDecoFlowers, setomeDecoFlowers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductsByCategory('HomeDeco');
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/flowers/category/${category}`);
      setomeDecoFlowers(response.data);
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
        category="Home Deco Collection"
        description="Celebrate Your Milestone with BloomJoy"
      />
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-10">
      {homeDecoFlowers.length === 0 ? (
          <p className="text-center text-gray-600 text-lg col-span-3">No flowers available.</p>
        ) : (
          homeDecoFlowers.map((product) => (
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
        At BloomJoy, we understand that graduation is a momentous occasion marking the culmination of years of hard work and dedication. Our exclusive Graduation Collection is designed to make this milestone even more memorable. Each bouquet and arrangement is crafted to perfection, symbolizing the beauty of your achievements and the bright future that lies ahead.
        <br /><br />
        Whether you're looking to honor a graduate's success, surprise a loved one, or add a touch of elegance to your celebration, our selection offers something for everyone. From the vibrant hues of roses to the timeless elegance of lilies, our flowers are more than just gifts—they are heartfelt messages of pride and joy.
        <br /><br />
        Explore our collection and let BloomJoy help you commemorate this special day with floral arrangements as unique and extraordinary as your journey. Because every achievement deserves to be celebrated in full bloom.
      </p>
      <Footer />
    </div>
  );
};

export default HomeDeco;
