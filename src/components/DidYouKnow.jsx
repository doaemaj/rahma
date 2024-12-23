/*import React, { useState } from "react";
import data from "../data/DidYouKnow.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";


const DidYouKnow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const refreshContent = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
  };

  return (
  
  <div className="flex items-center justify-center min-h-[30vh] py-4 px-4 bg-white  border-b border-black  relative  ">
  <div className="flex items-center max-w-4xl w-full p-4 ">

    <div className="flex-1">
      <h2 className="text-l font-bold mb-4 ">
        Did you know?
      </h2>
      <p className="text-gray-700 text-[0.8rem] leading-relaxed lg:text-[1rem]">
        {data[currentIndex].text}
      </p>
    </div>
    
    

    <div className="flex ml-6 md:gap-10 md:mr-10 ">
      <img
        src={data[currentIndex].image}
        alt="Did you know"
        className="  w-[160px]  h-[160px]  "
      />
    </div>
   
  </div>

  
  <button
    onClick={refreshContent}
    className="absolute top-3 right-4  bg-[#F1F0E7] hover:bg-gray-200 text-black-600 font-semibold w-16 h-8 px-3 py-2  rounded-lg shadow-md flex items-center justify-center "
  >
    <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5 text-gray-700" />
    
  </button>
</div>


  );
};

export default DidYouKnow;*/
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
    <div className="container mx-auto my-8 px-6 lg:px-24 ">
      <div className="bg-[#f6f4ed] flex items-center justify-center min-h-[30vh] py-4 px-4 border-b border-blue-200 relative rounded-lg shadow-md ">
        <div className="flex items-center max-w-4xl w-full p-4">
          
          <div className="flex-1">
            <h2 className="text-[1.3rem] font-bold mb-4">Did you know?</h2>
            <AnimatedSection>
            <p className="text-gray-700 text-[0.9rem] leading-relaxed lg:text-[1.1rem]">
              {data[currentIndex].text}
            </p>
            </AnimatedSection>
          </div>

          
          <div className="flex ml-6 md:gap-10 md:mr-10">
            <AnimatedSection>
            <img
              src={data[currentIndex].image}
              alt="Did you know"
              className="w-[170px] h-[170px]"
            />
            </AnimatedSection>
          </div>
        </div>

        
        <button
          onClick={refreshContent}
          className="absolute top-3 right-4 bg-[#F1F0E7] hover:bg-gray-200 text-black-600 font-semibold w-16 h-8 px-3 py-2 rounded-lg shadow-md flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default DidYouKnow;
