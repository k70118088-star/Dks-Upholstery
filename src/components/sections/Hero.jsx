import React from "react";
import Icons from "../common/Icons";
import Image from "next/image";
import { formFields } from "@/utils/helper";

const Hero = () => {
  return (
    <div className="w-full h-[860px] lg:h-215.25 bg-center bg-cover px-4 sm:px-6 lg:px-1.5 bg-no-repeat bg-[url('/assets/images/webp/hero-bg.webp')]">
      
      <div className="max-w-285 w-full pt-20 sm:pt-24 lg:pt-25.75 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        
        {/* Left Content */}
        <div className="text-center flex flex-col lg:items-start items-center w-full justify-center lg:justify-start lg:text-left">
          <Icons icon={"googleRating"} />
          
          <h1 className="text-[#010101] mt-4 font-semibold leading-[120%] text-3xl sm:text-4xl lg:text-5xl max-w-107.75 mx-auto lg:mx-0">
            <span className="text-[#19AE1A]"> Upholstery Services </span>
            Trusted Across Singapore
          </h1>

          <p className="max-w-full lg:max-w-107.25 font-normal text-sm sm:text-base text-[#4D4D4D] leading-[160%] mt-4 mb-6 lg:mb-7.5 mx-auto lg:mx-0">
            Complete upholstery solutions for homes and businesses sofas,
            cushions, built ins, headboards, and more.
          </p>

          <button className="flex cursor-pointer w-full sm:w-72 lg:w-59.75 h-12.5 rounded-[245px] items-center justify-center gap-2.5 bg-[#19AE1A] text-[#fafafa] font-semibold leading-[160%] text-base mx-auto lg:mx-0">
            <Icons icon={"whatsapp"} /> WhatsApp Us Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image
            src={"/assets/images/webp/hero-side-img.webp"}
            alt="hero side img"
            width={490}
            height={615}
            className="w-[280px]  lg:w-[490px] h-auto"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-[#fafafa] max-w-282 mx-auto mt-10 w-full rounded-4xl shadow-[0px_4px_25px_0px_#0101011A] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12.25">
        
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-between gap-5 lg:gap-4">
          
          {formFields.map((item, index) => (
            <div key={index} className="flex flex-col gap-1.5 w-full sm:w-[48%] lg:w-auto">
              
              <label
                className="flex items-center gap-1.5 text-[#010101] font-semibold text-sm leading-[160%]"
              >
                <Icons icon={item.icon} /> {item.label}
              </label>

              {item.type === "file" ? (
                <>
                  <label
                    htmlFor="upload-image"
                    className="w-full lg:w-82.5 px-4 py-[16.5px] flex items-center gap-1.5 text-[#4D4D4D] border border-dashed border-[#0101011F] rounded-[35px]"
                  >
                    <Icons icon={"dropImg"} /> {item.placeholder}
                  </label>
                  <input type="file" hidden id="upload-image" />
                </>
              ) : (
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  className="w-full lg:w-82.5 px-4 py-[16.5px] placeholder:text-[#4D4D4D] border border-[#0101011F] rounded-[35px]"
                />
              )}
            </div>
          ))}
        </div>

        <button className="bg-[#19AE1A] cursor-pointer mt-6 text-[#fafafa] font-semibold leading-[160%] w-full h-12.5 rounded-[245px] hover:bg-green-700 transition">
          Get Free Quote
        </button>
      </div>
    </div>
  );
};

export default Hero;
