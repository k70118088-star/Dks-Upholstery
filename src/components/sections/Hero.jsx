"use client";
import React from "react";
import Icons from "../common/Icons";
import Image from "next/image";
import { formFields } from "@/utils/helper";

const Hero = () => {
  return (
    <div className="w-full h-215 lg:h-215.25 bg-center bg-cover px-4 sm:px-6 lg:px-1.5 bg-no-repeat bg-[url('/assets/images/webp/hero-bg.webp')]">
      
      <div className="max-w-285 w-full pt-20 sm:pt-24 lg:pt-25.75 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        
        {/* Left Content */}
        <div className="text-center flex flex-col lg:items-start items-center w-full justify-center lg:justify-start lg:text-left">
          <Icons icon={"googleRating"} />
          
          <h1 className="text-blacky mt-4 font-semibold leading-120 text-3xl sm:text-4xl lg:text-5xl max-w-107.75 mx-auto lg:mx-0">
            <span className="text-green"> Upholstery Services </span>
            Trusted Across Singapore
          </h1>

          <p className="max-w-full lg:max-w-107.25 font-normal text-sm sm:text-base text-[#4D4D4D] leading-160 mt-4 mb-6 lg:mb-7.5 mx-auto lg:mx-0">
            Complete upholstery solutions for homes and businesses sofas,
            cushions, built ins, headboards, and more.
          </p>
         <a href="https://wa.me/98385685" target="blank">
          <button className="flex cursor-pointer w-55.25 sm:w-59.75 h-12.5 rounded-[245px] items-center justify-center gap-2.5 bg-green text-whity hover:bg-green-700 font-semibold leading-150 sm:leading-160 text-sm sm:text-base mx-auto lg:mx-0">
            <Icons icon={"whatsapp"} /> WhatsApp Us Now
          </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image
            src={"/assets/images/webp/hero-side-img.webp"}
            alt="hero side img"
            width={490}
            height={615}
            className="w-70  lg:w-122.5 h-auto"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-whity max-w-282 mx-auto mt-10 w-full rounded-4xl shadow-[0px_4px_25px_0px_#0101011A] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12.25">
        
        <form
          onSubmit={(e) => {
            if (!e.target.checkValidity()) {
              e.preventDefault();
              e.target.reportValidity();
            }
          }}
          className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-between gap-5 lg:gap-4"
        >
          
          {formFields.map((item, index) => (
            <div key={index} className="flex flex-col gap-1.5 w-full sm:w-[48%] lg:w-auto">
              
              <label className="flex items-center gap-1.5 text-blacky font-semibold text-sm leading-160">
                <Icons icon={item.icon} /> {item.label}
              </label>

              {item.type === "file" ? (
                <>
                  <label
                    htmlFor="upload-image"
                    className="w-full cursor-pointer lg:w-82.5 px-4 py-[16.5px] flex items-center gap-1.5 text-[#4D4D4D] border border-dashed border-[#0101011F] rounded-[35px]"
                  >
                    <Icons icon={"dropImg"} /> {item.placeholder}
                  </label>
                  <input type="file" hidden id="upload-image" required />
                </>
              ) : (
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  required
                  onInvalid={(e) => {
                    if (item.type === "text") {
                      e.target.setCustomValidity("Please enter name");
                    } else if (item.type === "tel") {
                      e.target.setCustomValidity("Please enter a valid phone number");
                    } else {
                      e.target.setCustomValidity("This field is required");
                    }
                  }}
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="w-full lg:w-82.5 px-4 py-[16.5px] placeholder:text-[#4D4D4D] border border-[#0101011F] rounded-[35px]"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="bg-green cursor-pointer mt-6 text-whity font-semibold leading-160 w-full h-12.5 rounded-[245px] hover:bg-green-700 transition"
          >
            Get Free Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
