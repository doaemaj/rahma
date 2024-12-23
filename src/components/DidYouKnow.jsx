import React, { useState } from "react";
import data from "../data/DidYouKnow.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import AnimatedSection from "./AnimatedSection";

const DidYouKnow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const refreshContent = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="container mx-auto my-8 px-4 lg:px-40">
      <div className="bg-[#f6f4ed] flex flex-col md:flex-row items-center justify-center min-h-[30vh] py-4 px-4 lg:px-14 border-b border-blue-200 relative rounded-lg shadow-md">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[1.3rem] font-bold mb-4">Did you know?</h2>
          <AnimatedSection>
            <p className="text-gray-700 text-[0.9rem] leading-relaxed lg:text-[1.1rem]">
              {data[currentIndex].text}
            </p>
          </AnimatedSection>
        </div>

        {/* Image Section */}
        <div className="mt-4 md:mt-0 md:ml-6 flex justify-center">
          <AnimatedSection>
            <img
              src={data[currentIndex].image}
              alt="Did you know"
              className="w-[150px] h-[150px] md:w-[170px] md:h-[170px] rounded-lg object-cover"
            />
          </AnimatedSection>
        </div>

        {/* Refresh Button */}
        <button
          onClick={refreshContent}
          className="absolute top-3 right-4 md:top-4 md:right-6 bg-[#F1F0E7] hover:bg-gray-200 text-black-600 font-semibold w-12 h-8 px-3 py-2 rounded-lg shadow-md flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default DidYouKnow;
