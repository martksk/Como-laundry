import { useState } from 'react';
import Navbar from "../components/navbar";

export default function HomePage() {
  const images = [
    'https://via.placeholder.com/1920x1080?text=Image+1',
    'https://via.placeholder.com/1920x1080?text=Image+2',
    'https://via.placeholder.com/1920x1080?text=Image+3',
    'https://via.placeholder.com/1920x1080?text=Image+4'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="no-scrollbar h-screen w-screen overflow-y-scroll">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative h-screen w-screen">
        <img src={images[currentImage]} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 flex space-x-5 w-full items-center justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3.5 w-3.5 rounded-full ${
                index === currentImage ? 'bg-white' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div>GGEZ</div>
    </div>
  );
}
