import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { CarouselItem } from './CarouselItem';
import { HeadMeal } from './HeadMeal';


export const MultiItemCarousel = () => {
  // useEffect(()=>{
  //   HeadMeal?.map((item)=>console.log("item headMeal",item))
  // },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
  };
  return (
    <div>
        {/* taking the image from Headmeal and map into the Carousalitem */}
        <Slider {...settings}>
            {/* {HeadMeal.map((item)=>(
                <CarouselItem image={item.image} title={item.title}/>
                ))} */}
                {
                    HeadMeal?.map((item)=>(
                        <CarouselItem image={item?.image} title={item?.title}/>
                    ))
                }
        </Slider>
        
    </div>
  )
}

