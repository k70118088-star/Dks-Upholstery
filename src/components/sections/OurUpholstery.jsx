"use client";
import { faqs, steps } from "@/utils/helper";
import React, { useState } from "react";
import Icons from "../common/Icons";

const OurUpholstery = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#FAF9F5] py-16 sm:py-20 lg:py-30 px-4 sm:px-6">
      <div className="max-w-285 w-full mx-auto flex flex-col items-center justify-center">
        
        <h4 className="max-w-full lg:max-w-209.25 text-center text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[120%] text-[#010101]">
          How Our Upholstery
          <span className="text-[#19AE1A]"> Service Works </span>
        </h4>

        <p className="max-w-full lg:max-w-182.5 text-center font-normal text-sm sm:text-base leading-[160%] text-[#4D4D4D] mt-3.75">
          Getting your sofa, chair, or cushions reupholstered in Singapore is
          simple. Here’s how our 3 step process makes it easy from start to
          finish.
        </p>

        {/* Steps */}
        <div className="max-w-233.5 w-full flex flex-col items-center gap-8 sm:gap-10.5 mt-10 lg:mt-12.5">
          
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col sm:flex-row items-center rounded-2xl group hover:bg-[#19AE1A14] border border-[#19AE1A3D]"
            >
              
              {/* Image */}
              <div className="w-full sm:w-64.25 h-52 sm:h-67 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full sm:rounded-l-2xl h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 max-w-full lg:max-w-149.75 w-full flex flex-col pl-4 sm:pl-8 lg:pl-11 pr-4 sm:pr-6 lg:pr-8.5 py-4 sm:py-0 text-left">
                
                <div className="flex items-center mb-4 sm:mb-5">
                  <span className="w-10 h-10 rounded-full group-hover:bg-[#19AE1A] group-hover:text-white border border-[#19AE1A] text-[#19AE1A] text-2xl font-medium leading-[120%] flex items-center justify-center">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          <button className="w-full sm:w-[232px] h-12.5 bg-[#19AE1A] text-[#fafafa] flex items-center gap-2.5 rounded-[245px] cursor-pointer justify-center text-base font-semibold leading-[160%]">
            <Icons icon={"cloud"} /> Step 1 : Send Photo
          </button>
        </div>

        {/* FAQ Section */}
        <div className="w-full pt-16 sm:pt-20 lg:pt-30 flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          
          <div className="w-full lg:w-1/3 flex-shrink-0 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Frequently Asked <span className="text-[#3a9e3f]">Questions</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="w-full lg:w-166.25 flex flex-col gap-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl cursor-pointer border p-4 transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#010101] bg-[#20AE190F]"
                      : "border-[#0101011F]"
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center cursor-pointer justify-between text-left"
                  >
                    <span className="text-sm sm:text-base leading-[160%] text-[#010101] font-semibold">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-gray-500 text-lg">
                      {isOpen ? (
                        <Icons icon={"upArrow"} />
                      ) : (
                        <Icons icon={"downArrow"} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="max-w-full lg:max-w-134.75 pt-2">
                      <p className="text-sm sm:text-base font-normal text-[#010101] leading-[160%]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button className="w-full sm:w-45.5 h-11.25 cursor-pointer mt-10 lg:mt-12.5 rounded-[245px] bg-[#19AE1A] text-[#FEFEFE] flex items-center justify-center font-semibold text-sm leading-[150%]">
          Find More Answer
        </button>
      </div>
    </div>
  );
};

export default OurUpholstery;