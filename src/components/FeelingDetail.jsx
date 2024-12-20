import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import duaasEmotion from "../data/duaasEmotions.json";
import Navbar from "./Navbar";

const FeelingDetail = () => {
  const { feeling } = useParams(); // Get the feeling from the route parameter
  const navigate = useNavigate();

  // Find the data for the selected feeling
  const feelingData = duaasEmotion.find(
    (data) => data.feeling.toLowerCase() === feeling.toLowerCase()
  );

  if (!feelingData) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">Feeling not found!</h1>
        <p className="mt-4">Please select a valid feeling from the main page.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen p-6 bg-beige pt-[130px] md:pt-[170px] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundPosition: window.innerWidth < 768 ? "top right 18%" : "top right 10%",
        }}
      >
        {/* Header with Back Button and Title */}
        <div className="flex items-center justify-between mb-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)} // Navigates back to the previous page
            className=" fixed bg-blue-100 text-black px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              strokeWidth="8"
            >
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 10H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 18z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Title */}
          <h1 className=" text-2xl sm:text-3xl font-bold text-center capitalize flex-1">
            I am feeling {feeling}...
          </h1>
        </div>

        {/* Dua Section */}
        <div className="mt-6 space-y-8 w-9/12 lg:w-7/12 mx-auto">
          {feelingData.duaas.map((dua, index) => (
            <div
              key={index}
              className="p-4 bg-blue-100 rounded shadow-lg text-center"
            >
              <p className="text-xl font-bold">{dua.arabic}</p>
              <p className="text-sm italic mt-2">{dua.transliteration}</p>
              <p className="text-base mt-2">{dua.english}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeelingDetail;
