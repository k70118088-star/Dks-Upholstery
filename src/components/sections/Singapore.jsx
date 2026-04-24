import React from "react";
import Slider from "../common/Slider";

const Singapore = () => {
  return (
    <div className="w-full mt-16 sm:mt-20 lg:mt-30 px-4 sm:px-6">
      
      <div className="max-w-285 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full mx-auto gap-6 lg:gap-0">
        
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-120 text-blacky max-w-full lg:max-w-138.25 text-center lg:text-left">
          Loved by Singapore
          <span className="text-green"> Homes & Businesses </span>
        </h2>

        <p className="max-w-full lg:max-w-106.75 text-[#4D4D4D] font-normal leading-160 text-sm sm:text-base text-center lg:text-left">
          Over 100 five star reviews from customers who transformed their sofas,
          chairs, and spaces with DKS Upholstery.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-12.5 mb-16 sm:mb-24 lg:mb-41.5">
        <Slider />
      </div>
    </div>
  );
};

export default Singapore;
