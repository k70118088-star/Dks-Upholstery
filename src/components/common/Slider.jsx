"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Icons from "./Icons";
import { testimonials } from "@/utils/helper";


const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {slidesPerView: 1},
          900: {slidesPerView: 2},
          1024: {slidesPerView: 2.7669},
        }}
        centeredSlides={true}
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        className="relative my-swiper"
      >
        {/* Left Button */}
        <div className="custom-prev absolute left-0 sm:left-15 top-1/2 -translate-y-1/2 z-9 w-15 h-15 group hover:bg-[#19AE1A] bg-[#fafafa] rounded-full flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
          <span className="text-white text-xl">
            <Icons icon={"prev"} pathClass={"group-hover:fill-[#FAFAFA]"} />
          </span>
        </div>

        {/* Right Button */}
        <div className="custom-next absolute right-0 sm:right-15 top-1/2 -translate-y-1/2 z-9 w-15 h-15 group hover:bg-[#19AE1A] bg-[#fafafa] rounded-full flex items-center justify-center cursor-pointer shadow-[1px_1px_6px_0px_#00000014]">
          <span className="text-white text-xl">
            <Icons icon={"next"} pathClass={"group-hover:fill-[#FAFAFA]"} />
          </span>
        </div>

        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`rounded-2xl p-10 border h-88.25 transition-all duration-300 ${
                  isActive
                    ? "bg-[#20AE190F] border-[#010101] shadow-[1px_1px_6px_0px_#00000014]"
                    : "bg-[#FAFAFA] border-[#01010129]"
                }`}
              >
                {/* Quote */}
                <Icons icon={"quote"} />
                <p
                  className={`text-base mt-6 ${isActive ? "text-[#010101]" : "text-[#4D4D4D]"} leading-[160%]`}
                >
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <h3 className="font-semibold text-2xl leading-[130%] text-[#010101]">
                      {item.name}
                    </h3>
                    <p className="text-base leading-[160%] text-[#4D4D4D]">
                      {item.role}
                    </p>
                  </div>

                  <Image
                    src={item.img}
                    alt="user"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>

                {/* Stars */}
                <div className="mt-17.5">
                  <Icons icon={"goldenStar"} />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
