import React from "react";
import delivery from "../Images/delivery.png";
import customize from "../Images/custom.png";
import time from "../Images/time.png";

const ServicesSection = () => {
  const services = [
    {
      title: 'Fast Delivery',
      description: 'Get your flowers fresh and fast! Our speedy delivery service ensures your blooms arrive promptly, preserving their beauty and fragrance for your special moments.',
      icon: delivery,
    },
    {
      title: 'Customize Design',
      description: 'Transform your floral vision into reality with our customizable designs service! We tailor every detail to suit your style and occasion, ensuring your flowers are as unique as you are. Let us craft the perfect floral masterpiece just for you!',
      icon: customize,
    },
    {
      title: 'Long-standing Flower',
      description: 'Experience the beauty of fresh flowers delivered to your doorstep with our long-standing flower service. Enjoy the finest blooms handpicked and arranged just for you, bringing timeless elegance to any occasion.',
      icon: time,
    },
  ];

  return (
    <section id="servicesSection" className="py-16">
      <h2 className="text-4xl font-bold mb-16 text-center text-[#DF2E38]">Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg shadow-lg">
            <div className="bg-[#91BD3A] p-4 rounded-t-lg flex items-center justify-center h-64">
              <img src={service.icon} alt={service.title} className="h-36 w-36" />
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
