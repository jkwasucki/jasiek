import React from 'react';
import { TfiMinus } from 'react-icons/tfi';

export default function Footer() {
  return (
    <div className="w-screen h-full bottom-0 inset-0 overflow-hidden lg:py-[100px] py-12">
      <div className="flex flex-col items-center gap-1">
        <div className="lg:w-full lg:h-full lg:flex lg:justify-between items-start text-center lg:px-[200px]">
          {/* Logo Section */}
          <div className="text-center lg:text-left lg:flex-grow">
            <h1 className="text-[30px] lg:text-[50px]">Bronisław Kurkus</h1>
            <p className="text-xl lg:text-3xl" style={{ fontFamily: "'Brush Script MT', cursive" }}>
              Artystyczna Pracownia Obuwia
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col text-center items-center lg:items-start lg:mr-[150px] mt-12 lg:mt-0">
            <p className="text-2xl lg:text-3xl pb-2">Kontakt</p>
            <p className="text-lg lg:text-xl">ul. Złota 73</p>
            <TfiMinus />
            <p className="text-lg lg:text-xl">00-819 Warszawa Wola</p>
            <TfiMinus />
            <p className="text-lg lg:text-xl">tel. 603 910 555</p>
            <TfiMinus />
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col mt-12 lg:mt-0 mb-12 lg:mb-0 lg:text-left">
            <h1 className="text-2xl lg:text-3xl pb-2">Godziny otwarcia</h1>
            <div className="flex flex lg:flex-row">
              <div className="flex flex-col text-lg lg:text-md mr-4">
                <p>Poniedziałek</p>
                <p>Wtorek</p>
                <p>Środa</p>
                <p>Czwartek</p>
                <p>Piątek</p>
                <p>Sobota</p>
                <p>Niedziela</p>
              </div>
              <div className="flex flex-col text-lg lg:text-md">
                <p>10:00 - 17:00</p>
                <p>10:00 - 17:00</p>
                <p>10:00 - 17:00</p>
                <p>10:00 - 17:00</p>
                <p>10:00 - 17:00</p>
                <p>nieczynne</p>
                <p>nieczynne</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Text */}
        <p className="text-sm lg:text-md text-center md:text-[15px] max-w-4xl px-4 pt-12">
          *Ze względu na różnego typu współprace z instytucjami artystycznymi godziny otwarcia nie zawsze są takie jak podane wyżej, dlatego najlepiej skontaktować się telefonicznie i umówić na konkretny termin.
        </p>
      </div>
    </div>
  );
}
