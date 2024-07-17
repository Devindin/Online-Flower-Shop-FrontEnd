import React from 'react';
import photo1 from "../Images/review1.jpg";
import photo2 from "../Images/review2.jpg";
import photo3 from "../Images/review3.jpg";

const reviews = [
  {
    name: 'Mihiri Nisansala',
    feedback: 'The flowers were fresh and beautifully arranged. Highly recommend BloomJoy!',
    photo: photo1,
  },
  {
    name: 'Kavindya peris',
    feedback: 'Amazing service and stunning bouquets. My go-to flower shop!',
    photo: photo3, 
  },
  {
    name: 'Subodhi Arunodya',
    feedback: 'BloomJoy made my wedding day even more special with their gorgeous floral arrangements.',
    photo: photo2, 
  },
];

const ReviewSection = () => {
  return (
    <section id ="reviewsSection" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold mb-16 text-center text-[#DF2E38]">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img src={review.photo} alt={review.name} className="h-40 w-40 rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">{review.name}</h3>
            <p className="text-gray-700 text-center">{review.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
