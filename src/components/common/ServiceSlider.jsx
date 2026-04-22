"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Icons from "./Icons";
import { services } from "@/utils/helper";


const ServiceSlider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto relative">
     <div className="custom-button absolute hidden left-0 min-[1300px]:-left-20 top-1/2 -translate-y-1/2 z-9 w-15 h-15 group hover:bg-[#19AE1A] bg-[#fafafa] rounded-full sm:flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
          <span className="text-white text-xl">
            <Icons icon={"prev"} pathClass={"group-hover:fill-[#FAFAFA]"} />
          </span>
        </div>

        {/* Right Button */}
        <div className="custom-button2 absolute hidden right-0 min-[1300px]:-right-20 top-1/2 -translate-y-1/2 z-9 w-15 h-15 group hover:bg-[#19AE1A] bg-[#fafafa] rounded-full sm:flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
          <span className="text-white text-xl">
            <Icons icon={"next"} pathClass={"group-hover:fill-[#FAFAFA]"} />
          </span>
        </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-button",
          prevEl: ".custom-button2",
        }}
         breakpoints={{
          640: {slidesPerView: 1},
          900: {slidesPerView: 2},
          1024: {slidesPerView: 3},
        }}
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border border-[#19AE1A33] flex flex-col justify-between rounded-2xl p-5 h-80.25  transition">
              {/* Icon */}
              <div>
              <div className="mb-4">
                <Icons icon={item.icon} />
              </div>

              {/* Title */}
              <h3 className="text-[#010101] font-semibold text-2xl leading-[130%] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#010101] text-base font-normal leading-[160%] mb-4">
                {item.desc}
              </p>
               </div>
              {/* Learn More */}
              <button className="text-[#19AE1A] font-medium text-sm flex items-center gap-1">
                Learn More <span>↗</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;