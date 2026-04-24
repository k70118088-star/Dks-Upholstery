"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { images, stats } from "@/utils/helper";
import Marquee from "react-fast-marquee";
import Icons from "../common/Icons";

const OurService = () => {

  return (
    <div className="mt-120 lg:mt-49 px-4 sm:px-6">
      
      <h2 className="text-center text-[#AFAFAF] font-semibold text-base sm:text-lg lg:text-xl leading-160 italic">
        Trusted Our Service
      </h2>

      <div className='flex mt-6 lg:mt-8 items-center justify-center gap-6 lg:gap-12.5'>
        <Marquee behavior="scroll" direction="left" loop="infinite">
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-12.5">
            {images.map((src, index) => (
              <Image 
                key={index} 
                src={src} 
                alt='img' 
                width={180} 
                height={62}
                className="w-45 h-auto"
              />
            ))}
          </div>
        </Marquee>
      </div>

      <div className="max-w-285 mt-12 sm:mt-16 lg:mt-20 mx-auto flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-between gap-6">
        
        {stats.map((item, index) => (
          <div 
            key={index} 
            className="border cursor-pointer border-[#19AE1A33] w-full sm:w-[48%] lg:w-full max-w-91 rounded-2xl hover:shadow-[0px_4px_25px_0px_#0101011A] p-5 flex items-center gap-5"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-[52px] flex items-center justify-center bg-[#1877F2]">
              <Icons icon={item.icon}/>
            </div>

            <div>
              <h2 className="font-semibold text-blacky text-xl sm:text-2xl lg:text-custom-2xl italic leading-120">
                {item.title}
              </h2>

              <p className="font-semibold text-[#4D4D4D] text-sm sm:text-base leading-120">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OurService;