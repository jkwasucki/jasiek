import React, { useEffect } from 'react';
import Image from 'next/image';

interface GImageProps {
  imageUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GImage: React.FC<GImageProps> = ({ imageUrl, onClose, onNext, onPrev }) => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
      <div className="relative w-full max-w-[90vw] h-[70vh] sm:h-[80vh] lg:w-1/2 lg:h-3/4 bg-transparent p-4 rounded shadow-lg flex flex-col justify-center items-center">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute text-[25px] z-10 top-2 right-2 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>

        {/* Previous Button */}
        <button 
          onClick={onPrev} 
          className="absolute z-10 top-1/2 lg:left-[-40px] left-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black rounded-full"
        >
          <span className="text-white text-[25px]">&#8249;</span>
        </button>

        {/* Next Button */}
        <button 
          onClick={onNext} 
          className="absolute z-10 top-1/2 lg:right-[-40px] right-2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black rounded-full"
        >
          <span className="text-white text-[25px]">&#8250;</span>
        </button>

        {/* Image */}
        <div className="relative w-full h-full">
          <Image 
            src={imageUrl} 
            alt="Gallery Image" 
            layout="fill" // Ensures the image fills the parent container
            objectFit="contain" // Use contain to keep the aspect ratio within bounds
            className={`rounded shadow-lg ${window.innerWidth < 1024 ? 'backdrop-blur-md' : ''}`} // Apply backdrop-blur only for mobile
          />
        </div>
      </div>
    </div>
  );
};

export default GImage;
