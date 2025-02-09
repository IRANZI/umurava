"use client";

import { useEffect, useState } from "react";

const images = [
  "/image-car.png",
  "/image-car.png",
  "/image-car.png",
  "/image-car.png",
];

interface ImageProps {
  className?: string;
}

const ImageCarousel: React.FC<ImageProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-customBlue" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
