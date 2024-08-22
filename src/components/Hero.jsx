import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            <div className="w-full sm:1/2 flex items-center justify-center py-10 sm:py-0">
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <span className='w-8 md:w-11 h-[2px] bg-[#414141]'></span>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='font-prata text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                        <span className='w-8 md:w-11 h-[1px] bg-[#414141]'></span>
                    </div>
                </div>
            </div>
            {/* Hero right side */}
            <div className="sm:1/2 w-full">
                <img src={assets.hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero