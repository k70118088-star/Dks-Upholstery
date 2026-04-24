import Image from 'next/image'
import React from 'react'
import Icons from '../common/Icons'

const UpholsteryTips = () => {
  return (
    <div className="w-full py-16 sm:py-20 lg:py-30 px-4 sm:px-6">
      
      <div className="max-w-285 mx-auto w-full">
        
        {/* Top Content */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-0">
          
          <h4 className="max-w-full lg:max-w-112.75 font-semibold text-3xl sm:text-4xl lg:text-5xl text-blacky leading-120 text-center lg:text-left">
            Upholstery Tips, <span className='text-green'>Care & Inspiration</span>
          </h4>

          <p className="max-w-full lg:max-w-106.75 font-normal leading-160 text-[#4D4D4D] text-sm sm:text-base text-center lg:text-left">
            Refresh your sofa with the right fabrics, foam, and expert advice plus a breakdown of reupholstery costs in Singapore.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 sm:mt-10 lg:mt-12.5 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-between gap-6">
          
          <Image 
            src={"/assets/images/webp/card-img.webp"} 
            alt='img' 
            width={364} 
            height={312} 
            className='w-full sm:w-[48%] lg:w-91 rounded-2xl shadow-[0px_4px_25px_0px_#0101011A]'
          />

          <div className="w-full sm:w-[48%] lg:w-91 p-5 h-78 rounded-2xl shadow-[0px_4px_25px_0px_#0101011A] flex flex-col justify-between">
            <div>
              <h5 className="font-semibold text-lg sm:text-xl leading-120 text-blacky">
                Best Upholstery Fabrics 2025
              </h5>
              <p className='font-normal mt-1.5 text-lg leading-160 text-[#4D4D4D]'>
                Explore the top trending and durable fabrics for sofas and chairs in 2025.
              </p>
            </div>

            <button className="mt-10 sm:mt-16 lg:mt-32.25 cursor-pointer text-green flex items-center gap-1">
              Learn More <span><Icons icon={"arrow"}/></span>
            </button>
          </div>

          <Image 
            src={"/assets/images/webp/card-img2.webp"} 
            alt='img' 
            width={364} 
            height={312} 
            className='w-full sm:w-[48%] lg:w-91 rounded-2xl shadow-[0px_4px_25px_0px_#0101011A]'
          />
        </div>

        <button className="w-36.25 h-12.5 hover:bg-green-700 mt-6 lg:mt-7.5 mx-auto cursor-pointer bg-green flex items-center justify-center rounded-[245px] font-semibold text-base leading-160 text-whity">
          Show More
        </button>
      </div>
    </div>
  )
}

export default UpholsteryTips
