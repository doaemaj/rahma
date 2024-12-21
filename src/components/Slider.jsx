
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";
import slider1 from "./images/slider2.jpg";
import slider2 from "./images/slider3.jpg";
import slider3 from "./images/slider3.jpg";
import slider4 from "./images/slider4.jpg";
import slider5 from "./images/slider5.jpg";
import slider6 from "./images/slider6.jpg";

const Slider = () => {
  const images = [slider1, slider2, slider5, slider4 ,slider3,slider6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getSlideClass = (index) => {
    if (index === currentIndex) return "current-slide"; // Middle image
    if (index === (currentIndex + 1) % images.length) return "next-slide"; // Right image
    if (index === (currentIndex - 1 + images.length) % images.length) return "prev-slide"; // Left image
    return "hidden-slide"; // Any other images
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <button className="arrow left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="slides">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slider-image ${getSlideClass(index)}`}
            />
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;

