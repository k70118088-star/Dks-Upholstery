"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Icons from "./Icons";
import { slides } from "@/utils/helper";

const BeforeAfterSlider = () => {
  return (
    <div className="w-full  mx-auto relative">
      {/* Custom Buttons */}
      <div className="prev absolute hidden left-0 min-[1300px]:-left-10 top-1/2 group -translate-y-1/2 z-10  sm:flex items-center justify-center cursor-pointer">
        <Icons
          icon={"prev"}
          pathClass={"fill-blacky group-hover:fill-green"}
        />
      </div>
      <div className="next absolute hidden right-0 min-[1300px]:-right-10 top-1/2 group -translate-y-1/2 z-10 sm:flex items-center justify-center cursor-pointer">
        <Icons
          icon={"next"}
          pathClass={"fill-blacky group-hover:fill-green"}
        />
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        loop={true}
        spaceBetween={24}
        breakpoints={{
          0: {
            spaceBetween: 0,
          },
          640: {
            spaceBetween: 24,
          },
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex sm:gap-6 gap-0">
              {/* BEFORE */}
              <div className="relative w-full">
                <Image
                  src={item.before}
                  alt="before"
                  width={558}
                  height={339}
                  className="sm:rounded-xl rounded-l-xl w-full object-cover"
                />
              </div>

              {/* AFTER */}
              <div className="relative w-full">
                <Image
                  src={item.after}
                  alt="after"
                  width={558}
                  height={339}
                  className="sm:rounded-xl rounded-r-xl w-full  object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BeforeAfterSlider;
