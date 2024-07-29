import React from 'react'
import Slider from "react-slick";
import Card from './Card';


function Brands() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=' overflow-x-clip mt-8 mx-auto max-w-[1000px]'>
      <Slider {...settings} >
        
          <Card imageURL="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420" name="Blizzard"/>
          <Card imageURL="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420" name="Blizzard"/>
          <Card imageURL="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420" name="Blizzard"/>
          <Card imageURL="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420" name="Blizzard"/>
          <Card imageURL="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420" name="Blizzard"/>
          <Card imageURL="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420" name="Blizzard"/>
          <Card imageURL="https://www.fireboltt.com/cdn/shop/products/supernova-black_1_95x.png?v=1673500420" name="Blizzard"/>
        
        
      </Slider>
    </div>
  )
}

export default Brands
