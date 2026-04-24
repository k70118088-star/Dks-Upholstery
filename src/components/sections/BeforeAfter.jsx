import React from "react";
import BeforeAfterSlider from "../common/BeforeAfterSlider";
import ServiceSlider from "../common/ServiceSlider";

const BeforeAfter = () => {
  return (
    <div className="w-full py-16 sm:py-20 lg:py-30 bg-[#FAF9F5] px-4 sm:px-6">
      
      <div className="max-w-285 w-full mx-auto">
        
        {/* Top Section */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-0">
          
          <h3 className="max-w-full lg:max-w-115.25 px-2 font-semibold text-3xl sm:text-4xl lg:text-5xl leading-120 text-blacky text-center lg:text-left">
            Before & After:
            <span className="text-green"> See the Difference </span>
          </h3>

          <p className="max-w-full lg:max-w-106.75 font-normal text-sm sm:text-base leading-160 text-[#4D4D4D] text-center lg:text-left">
            From worn out sofas to sleek wall panels, nothing shows our work
            better than a side by side transformation. Slide to see the
            difference for yourself.
          </p>
        </div>

        {/* Slider 1 */}
        <div className="mt-8 sm:mt-10 lg:mt-12.5 flex flex-col items-center justify-center">
          <BeforeAfterSlider />
          <button className="w-42.25 h-12.5 cursor-pointer hover:bg-green-700 text-center flex items-center justify-center bg-green rounded-[245px] mt-6 lg:mt-7.5 text-whity font-semibold text-base leading-160">
            See More Results
          </button>
        </div>

        {/* Second Section */}
        <div className="w-full mt-16 sm:mt-20 lg:mt-30 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-0">
          
          <h3 className="max-w-full lg:max-w-115.25 px-2 font-semibold text-3xl sm:text-4xl lg:text-5xl leading-120 text-blacky text-center lg:text-left">
            Pick from <span className="text-green"> Our Services </span>
          </h3>

          <p className="max-w-full lg:max-w-106.75 font-normal text-sm sm:text-base leading-160 text-[#4D4D4D] text-center lg:text-left">
            From worn out fabrics to flawless finishes, our expert craftsmanship
            turns tired furniture into pieces you’ll be proud to showcase.
          </p>
        </div>

        {/* Slider 2 */}
        <div className="mt-8 sm:mt-10 lg:mt-12.5 flex flex-col items-center justify-center">
          <ServiceSlider />
          <button className="w-42.25 h-12.5 cursor-pointer hover:bg-green-700 text-center flex items-center justify-center bg-green rounded-[245px] mt-6 lg:mt-7.5 text-whity font-semibold text-base leading-160">
            View All Services
          </button>
        </div>

      </div>
    </div>
  );
};

export default BeforeAfter;
