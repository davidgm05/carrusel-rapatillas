import React from 'react'
import Slider from 'react-slick';

const ImgPageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slideToScroll: 3,
        autoplay: false,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 2,
                }
            }
        ]


    }
  return (
    <>
    <div className='space'></div>
    <Slider {...settings}>
        <div className='img-1'></div>
        <div className='img-2'></div>
        <div className='img-3'></div>
        <div className='img-4'></div>
        <div className='img-5'></div>
        <div className='img-6'></div>
    </Slider>
    <div className='space-bottom'></div>
    </>
  )
}

export default ImgPageCarousel