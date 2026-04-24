"use client";
import { features } from '@/utils/helper';
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {

  return (
    <div className="w-full my-16 sm:my-20 lg:my-30 px-4 sm:px-6">
      
      <div className="max-w-285 w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        
        {/* Left Content */}
        <div className="w-full text-center lg:text-left">
          
          <h3 className='font-semibold text-3xl sm:text-4xl lg:text-5xl text-blacky leading-120'>
            About <span className='text-green'> Us </span>
          </h3>

          <div className='mt-6 lg:mt-7.5 flex flex-col gap-3'>
            
            {features.map((item, index) => (
              <div key={index} className='max-w-full lg:max-w-127.25 w-full rounded-2xl border border-[#19AE1A33] p-3.5 text-left'>
                <p className='font-semibold leading-160 text-sm sm:text-base text-blacky'>
                  {item.title}
                </p>
                <p className='max-w-full lg:max-w-120.25 mt-1 text-[#4D4D4D] font-normal text-sm sm:text-base leading-160'>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          <button className="w-36.5 mt-6 cursor-pointer hover:bg-green-700 lg:mt-7.5 h-12.5 rounded-[245px] bg-green text-[#FEFEFE] font-semibold leading-160 text-base flex items-center justify-center mx-auto lg:mx-0">
            Know More
          </button>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image 
            src={"/assets/images/webp/about-img.webp"} 
            alt='img' 
            width={533} 
            height={625} 
            className='max-w-70 sm:max-w-100 lg:max-w-133.25 w-full h-auto'
          />
        </div>

      </div>
    </div>
  )
}

export default AboutUs;
