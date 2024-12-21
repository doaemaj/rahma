
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdhkarCategory from "../data/Adhkar.json";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CategoryDetail = () => {
  const { dhikr } = useParams(); // Get the dhikr from the route parameter
  const navigate = useNavigate();

  // Find the data for the selected dhikr (case-insensitive match)
  const dhikrData = AdhkarCategory.find(
    (data) => data.dhikr.toLowerCase() === dhikr.toLowerCase()
  );

  // If no data is found, show an error message
  if (!dhikrData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-beige">
        <h1 className="text-3xl font-bold text-black mb-4">Category not found!</h1>
        <p className="text-lg text-gray-600">
          Please go back and select a valid category.
        </p>
        <button
          onClick={() => navigate(-1)} // Navigate back
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }
    // Initialize counters for each dua
const [counters, setCounters] = useState(
        Array(dhikrData.duaas.length).fill(0)
);
  // Function to increment the counter for a specific dua
  const incrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };
  const resetCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] = 0;
    setCounters(newCounters);
  };


  // Render the category details
  return (
    <>
      <Navbar />
      <div
  className="min-h-screen p-6 bg-fixed bg-cover mt-24 md:mt-32 "
  style={{
    backgroundImage: "url('/assets/bg.jpg')",
  }}
>



        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)} // Back button
            className="hidden sm:block fixed px-4 py-2 rounded transition bg-white text-black hover:bg-[rgb(203,213,222)] hover:text-white"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 10H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 18z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className=" font-Crimson text-3xl md:text-4xl font-bold text-center capitalize flex-1">
            {dhikrData.dhikr}
          </h1>
        </div>

        {/* Dua List */}
        <div className="space-y-8 w-10/12 lg:w-7/12 mx-auto">
          {dhikrData.duaas.map((dua, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded shadow-md text-center"
            >
              <p className="text-xl font-bold">{dua.arabic}</p>
              <p className="text-sm italic text-gray-500 mt-2">{dua.transliteration}</p>
              <p className="text-base text-gray-700 mt-2">{dua.english}</p>
              {dua.reference && (
                <p className="text-sm text-gray-400 mt-2">{dua.reference}</p>
              )}
              {/* boutton pour incrementer */ }
                <div className="flex items-center justify-center mt-4">
                {/* Counter Display and Buttons */}
                <button
                    onClick={() => resetCounter(index)}
                    className="px-4 py-2  text-black rounded-l-md hover:bg-blue-200 transition"
                    style={{ backgroundColor: 'rgb(203,213,222)' }}
                >
                    Set to 0
                </button>
                <span className="px-4 py-2 bg-white border border-gray-300 text-black">
                    {counters[index]}
                </span>
                <button
                    onClick={() => incrementCounter(index)}
                    className="px-4 py-2 bg-gray-200 border-l border-gray-300 rounded-r-md hover:bg-gray-100 transition"
                >
                    +
                </button>
                </div>




            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
