"use client"
import { useState } from 'react';
import Slider from 'react-slick';

const SimpleSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    beforeChange: (current, next) => setActiveSlide(next), 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/img/slider.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/img/slide2.jpg" alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
