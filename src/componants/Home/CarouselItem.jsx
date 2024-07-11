import React from 'react'
import { HeadMeal } from './HeadMeal'

export const CarouselItem = ({image,title}) => {
  // console.log("HeadMeal",HeadMeal)
    
  return (
    <div className='flex flex-col justify-center item-center'>
        <img className='w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full object-cover object-center' src={image} alt=''/>
        <span className='py-5 text-center font-semibold text-xl text-gray-400'>{title}</span>
    </div>
  )
}

