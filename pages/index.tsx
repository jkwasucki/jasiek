import React, { useRef, useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Footer from '@/Components/Footer';
import Gallery from '@/Components/Gallery';

const Home: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    if (isAtTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      scrollToTop();
    }
  };

  return (
    <main className="flex flex-col h-full w-full font-charm gap-12 items-center">
      <Navbar scrollToRef={scrollToRef} />
      <Hero />
      <div ref={aboutRef} id="about" className='anchor-section'>
        <About />
      </div>
      <div ref={galleryRef} id="gallery" className="anchor-section">
        <Gallery />
      </div>
      <div ref={contactRef} id="contact" className="anchor-section">
        <Footer />
      </div>

      {/* Fixed Icon */}
      <div
        className="fixed bottom-8 right-8 bg-white p-3 rounded-full shadow-lg cursor-pointer"
        onClick={scrollToBottom}
      >
        {isAtTop ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        )}
      </div>
    </main>
  );
};

export default Home;
