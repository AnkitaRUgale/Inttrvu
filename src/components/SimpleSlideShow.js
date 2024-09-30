import React, { useState, useEffect } from 'react';

const SimpleSlideshow = () => {
  const images = [
    'https://inttrvu.ai/wp-content/uploads/2024/07/banner2.jpg',
    'https://inttrvu.ai/wp-content/uploads/2024/07/banner3.jpg',
    'https://inttrvu.ai/wp-content/uploads/2024/07/banner1-1536x960.jpg',

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] mx-auto overflow-hidden">
     
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default SimpleSlideshow;
