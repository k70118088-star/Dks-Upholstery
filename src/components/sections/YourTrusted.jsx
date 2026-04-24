import React from 'react'
import Icons from '../common/Icons'

const YourTrusted = () => {
  return (
    <div className="w-full sm:bg-[#F9F8F5]">
    <div className="w-full mb-10 min-h-98 bg-center object-contain bg-cover bg-no-repeat bg-[url('/assets/images/webp/trusted-bg.webp')] px-4 sm:px-6">
      
      <div className="max-w-198.75 w-full mx-auto pt-12 sm:pt-16 lg:pt-11.25">
        
        <h6 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-blacky leading-120 text-center">
          Your Trusted Upholstery 
          <span className='text-green'> Experts in Singapore </span>
        </h6>

        <p className="mt-3.5 max-w-76.25 sm:max-w-120 lg:max-w-182.25 text-center mx-auto font-normal text-sm sm:text-base leading-160 text-[#4D4D4D]">
          For over 18 years, we’ve perfected the art of upholstery. From sofas and chairs to custom built panels and commercial projects, every piece is crafted with premium materials and backed by our 12 month workmanship warranty.
        </p>

        <button className="flex mt-6 lg:mt-8 hover:bg-green-700 mx-auto cursor-pointer w-48 md:w-59.75 h-12.5 rounded-[245px] items-center justify-center gap-2.5 bg-green text-whity font-semibold leading-160 text-base">
          <span className='hidden md:flex'><Icons icon={"whatsapp"}/></span> WhatsApp Us Now!
        </button>
      </div>
    </div>
    </div>
  )
}

export default YourTrusted