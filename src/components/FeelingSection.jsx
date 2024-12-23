import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeelingSection.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FeelingSection = () => {
  const feelings = [
    { text: "Angry", color: "red", x: "72%", y: "35%" },
    { text: "Anxious", color: "orange",x: "7%", y: "27%" },
    { text: "Bored", color: "purple", x: "71%", y: "19%" },
    { text: "Confused", color: "blue", x: "82%", y: "30%" },
    { text: "Content", color: "yellow", x: "88%", y: "20%" },
    { text: "Depressed", color: "gray", x: "89%", y: "54%" },
    { text: "Doubtful", color: "rose", x: "79%", y: "46%" },
    { text: "Envious", color: "pink", x: "8%", y: "41%" },
    { text: "Grateful", color: "yellow", x: "26%", y: "76%" },
    { text: "Greedy", color: "green", x: "74%", y: "76%" },
    { text: "Guilty", color: "red", x: "30%", y: "21%" },
    { text: "Happy", color: "yellow", x: "10%", y: "56%" },
    { text: "Hurt", color: "blue", x: "91%", y: "77%" },
    { text: "Jealous", color: "green", x: "10%", y: "18%" },
    { text: "Lazy", color: "purple",  x: "70%", y: "59%"},
    { text: "Lost", color: "pink", x: "79%", y: "66%" },
    { text: "Nervous", color: "orange", x: "91%", y: "40%"  },
    { text: "Overwhelmed", color: "red", x: "19%", y: "47%" },
    { text: "Regretful", color: "blue", x: "20%", y: "29%" },
    { text: "Sad", color: "orange", x: "7%", y: "76%" },
    { text: "Scared", color: "green", x: "89%", y: "68%" },
    { text: "Tired", color: "gray", x: "17%", y: "69%" },
    { text: "Unloved", color: "purple", x: "25%", y: "60%" },
    { text: "Weak", color: "green", x: "29%", y: "40%" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter feelings based on the search term
  const filteredFeelings = feelings.filter((feeling) =>
    feeling.text.toLowerCase().startsWith(searchTerm.toLowerCase())
);

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-screen  pt-[30px] md:overflow-hidden "
      style={{
        backgroundImage: "url('/bg3.png')",
        backgroundSize: "cover", // Ensures the image covers the entire background proportionally
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling (duplication)
      }}>
      
        {/* Search Bar */}
        
        {/* Search Bar with Title */}
        <div className="w-full flex flex-col items-center mt-20 md:mt-32">
          
          <input
            type="text"
            placeholder="Search for a feeling..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="hidden md:block border-2 border-gray-300 rounded-lg px-4 py-2 w-2/3 md:w-1/3 focus:outline-none focus:border-blue-500"
          />
          <h2 className="hidden md:block text-3xl font-bold text-gray-800 mt-4 font-Crimson">Click on how you're feeling</h2>
        </div>


        {/* Desktop Layout */}
        <div className="hidden md:block relative h-full">
          
          {/* Central Box */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg w-4/12 lg:w-custom">
            <img src="src/assets/emotions2.jpg" alt="emotions" />
          </div>

          {filteredFeelings.map((feeling, index) => (
            <button
              key={index}
              className={`absolute text-${feeling.color}-600 hover:underline text-2xl transition-transform duration-2000 ease-in-out font-medium`}
              style={{
                filter: "drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.3))",
                top: `calc(${feeling.y} - 120px)`,
                left: feeling.x,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => navigate(`/feeling/${feeling.text.toLowerCase()}`)}
              onMouseEnter={(e) => {
                e.target.style.transform = "translate(-50%, -50%) scale(1.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translate(-50%, -50%) scale(1)";
              }}
            >
              {feeling.text}
            </button>
          ))}
        </div>

        {/* Tablet and Mobile Layout */}
        <div className="block md:hidden flex-grow min-h-screen overflow-scroll bg-beige"
        style={{
          backgroundImage: "url('/bg3.png')",
          backgroundSize: "cover", // Ensures the image covers the entire background proportionally
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling (duplication)
        }}>
          <h2 className="font-Crimson text-2xl sm:text-3xl font-bold text-center mt-4">
            Click on how you're feeling
          </h2>
          <div className="w-full flex justify-center mt-3">
            <input
              type="text"
              placeholder="Search for a feeling..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" border-2 border-gray-300 rounded-lg px-4 py-2 w-2/3 md:w-1/3 focus:outline-none focus:border-blue-500 mb-2"
            />
        </div>
          
          <div className="grid grid-cols-2 gap-4 p-4">
            {filteredFeelings.map((feeling, index) => (
              <button
                key={index}
                className={`bg-[#c7d4dc] text-${feeling.color}-600 hover:bg-blue-50 p-4 rounded shadow-lg text-xl`}
                onClick={() =>
                  (window.location.href = `/feeling/${feeling.text.toLowerCase()}`)
                }
              >
                {feeling.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeelingSection;
