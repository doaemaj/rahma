/*import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import categories from "../data/categories.json";
import slider1 from "../images/slider2.png";
import "./Slider.css";

const Categories = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-beige py-5 px-5 border-beige">
      <div
        className="
          grid grid-cols-2       
          gap-5 max-w-[1200px] w-full
          md:grid-cols-3         
          lg:grid-cols-5         
          mt-2"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center p-4 w-full h-[100px] bg-[#759BDB99] rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="category-icon">
              <img
                className="w-[60px] h-[70px] object-contain mr-2 mt-1"
                src={category.icon}
                alt={category.name}
              />
            </div>
            <div className="text-white text-[1.2rem] font-serif italic text-center">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center w-full max-w-md mx-auto mt-10">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search ......"
        className="w-full p-2 text-gray-600 placeholder-gray-400 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="ml-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l4 4"
          />
        </svg>
      </button>
    </div>
  );
};

const Slider = () => {
  const images = [slider1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <button className="arrow left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
        <button className="arrow right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

const CategoriesComponent = () => {
  return (
    <div>
      <Slider />
      <SearchBar />
      
      <Categories />
    </div>
  );
};

export default Categories;*/
