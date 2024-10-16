import React from 'react';
import Image from 'next/image';
import heroImage from '../public/3.jpg'; // Path to your image in the public directory
import heroImage2 from '../public/2.jpg';
import separatorImage from '../public/Linia.png';

export default function Hero2() {
  return (
    <div className="flex flex-col w-screen lg:min-h-screen lg:max-h-screen lg:gap-12 lg:py-12">
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center max-w-[90vw] lg:max-w-[70vw] gap-5 mx-auto py-6 lg:py-0">
        <Image src={separatorImage} alt="Separator Image" />
        <h1 className="text-[24px] sm:text-[28px] lg:text-[30px]">Kilka słów o naszej pracowni</h1>
        <p className="text-[15px] sm:text-[17px] lg:text-[20px] leading-relaxed">
         Od 1919 roku ręcznie wykonujemy obuwie męskie i damskie najwyższej klasy. Na życzenie klienta wykonujemy prawie każdy rodzaj butów.
         Wszystko jest robione w oparciu o indywidualne projekty uzgodnione z klientem.
         Nawet najbardziej ekstrawaganckie projekty traktujemy jak wyzwanie oraz okazje do potwierdzenia naszych rzemieślniczych umiejętności.
        </p>
      </div>

      {/* Image Section */}
      <div className="px-4 lg:px-12 w-full lg:h-[85vh] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4">
        <div className="relative w-full h-[60vh] lg:h-full">
          <Image
            src={heroImage} // Path to your first image in the public directory
            alt="Hero Image 1"
            layout="fill" // Fill the entire parent container
            objectFit="cover" // Cover the container while maintaining aspect ratio
            quality={100} // Image quality (1-100)
          />
        </div>
        <div className="relative w-full h-[60vh] lg:h-full">
          <Image
            src={heroImage2} // Path to your second image in the public directory
            alt="Hero Image 2"
            layout="fill" // Fill the entire parent container
            objectFit="cover" // Cover the container while maintaining aspect ratio
            quality={100} // Image quality (1-100)
          />
        </div>
      </div>
    </div>
  );
}
