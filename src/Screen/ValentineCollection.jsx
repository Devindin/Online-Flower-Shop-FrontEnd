import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import flowers from '../FlowerData';
import Footer from '../Components/Footer';
import PictureDiv from '../Components/PictureDiv';
import image from '../Images/image5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const  ValentineCollection = () => {

  const [valentineFlowers, setValentineFlowers] = useState([]);
  const [likedFlowers, setLikedFlowers] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductsByCategory('valentine');
  }, []);


  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/flowers/category/${category}`);
      setValentineFlowers(response.data);
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
        category="Valentine Collection"
        description="Celebrate Your Milestone with BloomJoy"
      />
     
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-10">
        {valentineFlowers.length === 0 ? (
          <p className="text-center text-gray-600 text-lg col-span-3">No flowers available.</p>
        ) : (
          valentineFlowers.map((product) => (
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
      Valentine's Day is a time to celebrate love, and nothing conveys your deepest emotions better than the timeless beauty of flowers. This year, let the enchanting allure of blossoms create <br/><br/>unforgettable moments for you and your loved one. Our curated selection of Valentine's Day flowers is designed to express your heartfelt sentiments and make the day truly special.

Imagine the delight on your partner's face as they receive a stunning bouquet of fresh, fragrant roses, each bloom symbolizing your love and devotion. Whether it's the classic red rose for passionate<br/><br/> romance,the delicate pink rose for admiration and sweetness, or the unique purple rose for enchantment, our collection has something for every kind of love story.
      </p>
      <Footer />
    </div>
  );
};

export default ValentineCollection;
