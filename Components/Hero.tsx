import React from 'react';
import Image from 'next/image';
import heroImage from '../public/4.jpg'; // Path to your image in the public directory

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh]">
      <div className="absolute inset-0 w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 px-4">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[80px] text-center text-white">
          {"„Od dzisiaj buty są zwierciadłem duszy”"}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white text-center mt-4">
        </p>
      </div>
    </div>
  );
}
