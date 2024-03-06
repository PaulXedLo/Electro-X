import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={image.alt} />
          <div
            className={`image-text ${index === currentSlide ? "active" : ""}`}
          >
            <p className="carousel_device_name">{image.name}</p>
            <p className="carousel_device_info">{image.text}</p>
            <p className="carousel_device_info">{image.additional}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
