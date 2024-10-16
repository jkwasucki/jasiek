import React from 'react'
import Image from 'next/image';
import { TfiMinus } from "react-icons/tfi";

export default function Contact() {
  return (
    <div className='max-w-full h-full  '>
        <div className='flex flex-col text-center items-center gap-2'>
            <p className='text-[50px]'>Kontakt</p>
            
            {/* <div className='border border-black w-1/4'/> */}
            <div className='flex flex-col text-[20px] items-center'>
                <p>
                        ul. Konwaliowa 54
                </p>
                <TfiMinus/>
                <p>
                    Warszawa 04-234 Śródmieście
                </p>
                <TfiMinus/>
                <p>
                    tel. 4234234234
                </p>
                <TfiMinus/>
            </div>
            
        </div>
    </div>
  )
}
