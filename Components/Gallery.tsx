import React, { useState } from 'react';
import Image from 'next/image';
import GImage from './GImage'; // Adjust the import path as needed
import separatorImage from '../public/Linia.png';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    '/buty5.jpg',
    '/buty15.jpg',
    '/buty11.jpg',
    '/buty12.jpg',
    '/buty17.jpg',
    '/buty8.jpg',
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="lg:min-h-screen lg:max-h-screen flex flex-col items-center px-4 lg:px-12 py-6 lg:py-12">
      {/* Separator Image */}
      <Image src={separatorImage} alt="Separator" />

      {/* Gallery Title and Description */}
      <div className="flex flex-col items-center justify-center mb-6 text-center max-w-[90vw] lg:max-w-[70vw]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-8 mb-4">Galeria</h1>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
          W pracowni szewskiej każdy szewc staje się architektem wygody i klasy, tworząc obuwie, które staje się wyrazem osobowości tego kto je nosi.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((image, index) => (
          <div key={index} className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto">
            <Image
              src={image}
              alt={`Gallery ${index}`}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Image Modal (Full-screen overlay) */}
      {selectedImageIndex !== null && (
        <GImage 
          imageUrl={images[selectedImageIndex]} 
          onClose={handleClose} 
          onNext={handleNext} 
          onPrev={handlePrev} 
        />
      )}
    </div>
  );
};

export default Gallery;
