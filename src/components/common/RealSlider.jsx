"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Icons from "./Icons";
import { slide } from "@/utils/helper";


const RealSlider = () => {
  return (
    <div className="w-full">
      <div className="mx-auto relative">

       <button className="custom-butt absolute hidden -left-15 min-[1340px]:-left-25 top-1/2 -translate-y-1/2 z-9 w-15 h-15 group border border-green hover:bg-green  rounded-full min-[1250px]:flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
          <span className="text-white text-xl">
            <Icons icon={"prev"} pathClass={"group-hover:fill-whity"} />
          </span>
        </button>

        {/* Right Button */}
        <button className="custom-butt2 absolute hidden -right-15 min-[1340px]:-right-25 top-1/2 -translate-y-1/2 z-9 w-15 h-15 group border border-green hover:bg-green rounded-full min-[1250px]:flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
          <span className="text-white text-xl">
            <Icons icon={"next"} pathClass={"group-hover:fill-whity"} />
          </span>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-butt2",
            prevEl: ".custom-butt",
          }}
          loop={true}
        >
          {slide.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-between flex-col min-[1250px]:flex-row items-center gap-8 min-[1250px]:gap-0">

                {/* LEFT IMAGE */}
                
                  <Image
                    src={item.img}
                    alt="sofa"
                    width={616}
                    height={380}
                    className="rounded-2xl max-w-154 w-full"
                  />
                

                {/* RIGHT CONTENT */}
                <div >

                  {/* Quote Icon */}
                  <div className="mb-7.5"><Icons icon={"quote"}/></div>

                  {/* Title */}
                  <h2 className="font-semibold text-blacky text-xl mb-3">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#4D4D4D] text-wrap max-w-106.75 text-base leading-160 mb-6">
                    {item.desc}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="rounded-full flex items-center justify-center shadow">
                      <Icons icon={"google"}/>
                    </div>
                    <span className="text-[#4D4D4D] text-base font-semibold leading-160">
                      {item.name}
                    </span>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex min-[1250px]:hidden gap-6 items-center justify-center mt-10">
        <button className="custom-butt  min-[1250px]:hidden -translate-y-1/2 z-9 w-15 h-15 border border-green group hover:bg-green  rounded-full flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
          <span className="text-white text-xl">
            <Icons icon={"prev"} pathClass={"group-hover:fill-whity"} />
          </span>
        </button>

        {/* Right Button */}
        <button className="custom-butt2  min-[1250px]:hidden -translate-y-1/2 z-9 w-15 h-15 group border border-green hover:bg-green  rounded-full flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
          <span className="text-white text-xl">
            <Icons icon={"next"} pathClass={"group-hover:fill-whity"} />
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default RealSlider;
