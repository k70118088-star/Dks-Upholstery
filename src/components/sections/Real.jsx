import React from 'react'
import RealSlider from '../common/RealSlider'

const Real = () => {
  return (
    <div className="w-full min-h-196.75 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/webp/real-bg.webp')] px-4 sm:px-6">
      
      <div className="max-w-285 mt-16 sm:mt-20 lg:mt-30 mx-auto">
        
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-0">
          
          <h3 className="max-w-full lg:max-w-137.25 font-semibold text-3xl sm:text-4xl lg:text-5xl leading-120 text-blacky text-center lg:text-left">
            Real Transformations
            <span className="text-green"> Real Customers </span>
          </h3>

          <p className="max-w-full lg:max-w-106.75 font-normal text-sm sm:text-base leading-160 text-[#4D4D4D] text-center lg:text-left">
            Every project tells a story see what other customers say about their sofas, chairs, and spaces after working with DKS Upholstery.
          </p>
        </div>

        <div className='mt-8 sm:mt-10 lg:mt-12.5'>
          <RealSlider />
        </div>

      </div>
    </div>
  )
}

export default Real
