import React from 'react'
import Slider from "react-slick";
import Card from './Card';
function Bestsellers() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        swipe: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full pt-10 border-t'>
            <div className='flex w-full justify-center'>
                <h1 className='font-bold text-2xl md:text-4xl '>Explore </h1>
                <h1 className='font-bold text-2xl md:text-4xl pl-2 text-orange-600'>Bestsellers</h1>
            </div>
            <div className=' overflow-x-clip mt-8 mx-4 '>
                <Slider {...settings} >

                    <Card imageURL="https://cdn.shopify.com/videos/c/o/v/0666fccb5f39493d9af9aa27f483a23a.mp4" name="Dream" />
                    <Card imageURL="https://cdn.shopify.com/videos/c/o/v/3275ef01f7464bc38ce58ea1c5dd83df.mp4" name="Retro" />
                    <Card imageURL="https://cdn.shopify.com/videos/c/o/v/cc0b7c544ec34dd3a5285f0af8149ee8.mp4" name="Royal" />
                    <Card imageURL="https://cdn.shopify.com/videos/c/o/v/8196b82a14274afe8a910b08d5ec5e4c.mp4" name="Blizzard" />

                </Slider>
            </div>
        </div>
    )
}

export default Bestsellers
