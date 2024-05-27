import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const FullPageCarousel = () => {
    const [active, setActive] = useState(0)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        afterChange: (index) => setActive(index),
    };

    return (
        <Slider {...settings}>
            <div className={`carousel-slide ${active === 0? "active": ""} slide-1`}>
                <div className='container-svg'>
                <h2 className='just_do_it-1'>JUST DO IT</h2>
                <div className='svg-zapato-1'></div>
                <button className='button-shop-1'>SHOP NOW</button>
                <h1 className='marca'>NIKE</h1>
                <p className='modelo'>Court vision</p>
                </div>
            </div>
            <div className={`carousel-slide ${active === 1? "active": ""} slide-2`}>
            <div className='container-svg'>
            <h2 className='just_do_it-2'>JUST DO IT</h2>
                <div className='svg-zapato-2'></div>
                <button className='button-shop-2'>SHOP NOW</button>
                <h1 className='marca'>NIKE</h1>
                <p className='modelo'>Court vision</p>
                </div>
            </div>
            <div className={`carousel-slide ${active === 2? "active": ""} slide-3`}>
            <div className='container-svg'>
            <h2 className='just_do_it-3'>JUST DO IT</h2>
            <div className='svg-zapato-3'></div>
            <button className='button-shop-3'>SHOP NOW</button>
                <h1 className='marca'>NIKE</h1>
                <p className='modelo'>Court vision</p>
                </div>
            </div>
        </Slider>
    );
};

export default FullPageCarousel;
