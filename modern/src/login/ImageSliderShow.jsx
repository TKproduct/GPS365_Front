import React, { useState, useEffect } from 'react';

const ImageSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(slideshowTimer);
  }, []);
  return <img src={images[currentImageIndex]} alt="Slideshow" />;
};

export default ImageSlideshow;