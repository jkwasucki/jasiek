import React, { useRef } from 'react';

interface NavbarProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToRef }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col lg:gap-12 items-center w-full px-6 py-4 lg:px-12 lg:py-6">
      {/* Logo Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-5xl">Bronisław Kurkus</h1>
        <p className="text-xl lg:text-3xl" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          Artystyczna Pracownia Obuwia
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col lg:flex-row mt-4 lg:mt-2 text-center text-lg lg:text-2xl text-black">
        <a
          href="#contact"
          onClick={() => scrollToRef(contactRef)}
          className="text-black hover:text-gray-900 py-2 lg:mr-6"
        >
          Kontakt
        </a>
        <a
          href="#gallery"
          onClick={() => scrollToRef(galleryRef)}
          className="text-black hover:text-gray-900 py-2 lg:mr-6"
        >
          Galeria
        </a>
        <a
          href="#about"
          onClick={() => scrollToRef(aboutRef)}
          className="text-black hover:text-gray-900 py-2"
        >
          O nas
        </a>
      </div>
    </div>
  );
};

export default Navbar;
