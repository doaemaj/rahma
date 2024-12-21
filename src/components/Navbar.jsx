import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // État pour le menu mobile
  const currentDate = new Date();

  // Formatez la date en arabe
  const formattedDate = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(currentDate);
  return (
    <nav className="bg-gray-900 text-white top-0 w-full fixed z-50">
    {/* Header principal */}
    <div className="bg-white py-4 px-4 md:px-0">
      <div className="flex items-center justify-between md:justify-center">
        {/* Icône burger (côté gauche, toujours visible sur mobile) */}
        <div className="text-center md:flex-grow md:text-center">
          <h1
            className="text-3xl font-pacifico"
            style={{ color: "#142D4C" }}
          >
            Rahma
          </h1>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Section "Rahma" et date */}
        
      </div>
    </div>

    {/* Menu principal */}
    <div className="border-b bg-white shadow-lg">
      <div className="flex justify-between items-center px-4 py-2">
        

        {/* Menu en grand écran */}
        <div className="hidden md:flex justify-center items-center w-full space-x-20">
          <Link
            to="/"
            className={`font-kotta text-lg hover:font-bold text-black ${
              location.pathname === "/"
                ? "text-[#142D4C] font-bold"
                : "hover:text-[#142D4C]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/category"
            className={`font-kotta text-lg hover:font-bold text-black ${
              location.pathname === "/category"
                ? "text-[#142D4C] font-bold"
                : "hover:text-[#142D4C]"
            }`}
          >
            Dua & Dhikr
          </Link>
          <Link
            to="/feeling"
            className={`font-kotta text-lg hover:font-bold text-black ${
              location.pathname === "/feeling"
                ? "text-[#142D4C] font-bold"
                : "hover:text-[#142D4C]"
            }`}
          >
            I am feeling
          </Link>
          <Link
            to="/names-of-allah"
            className={`font-kotta text-lg hover:font-bold text-black ${
              location.pathname === "/names-of-allah"
                ? "text-[#142D4C] font-bold"
                : "hover:text-[#142D4C]"
            }`}
          >
            Names of Allah
          </Link>
        </div>
      </div>

      {/* Menu déroulant pour mobile */}
      {isOpen && (
        <div className="flex flex-col items-center md:hidden space-y-2 py-2">
          <Link
            to="/"
            className={`font-kotta hover:font-bold text-black ${
              location.pathname === "/" ? "text-[#142D4C] font-bold" : "hover:text-[#142D4C]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/category"
            className={`font-kotta hover:font-bold text-black ${
              location.pathname === "/category"
                ? "text-[#142D4C] font-bold"
                : "hover:text-[#142D4C]"
            }`}
          >
            Dua & Dhikr
          </Link>
          <Link
            to="/feeling"
            className={`font-kotta hover:font-bold text-black ${
              location.pathname === "/feeling" ? "text-[#142D4C] font-bold" : "hover:text-[#142D4C]"
            }`}
          >
            I am feeling
          </Link>
          <Link
            to="/names-of-allah"
            className={`font-kotta hover:font-bold text-black ${
              location.pathname === "/names-of-allah"
                ? "text-[#142D4C] font-bold"
                : "hover:text-[#142D4C]"
            }`}
          >
            Names of Allah
          </Link>
        </div>
      )}
    </div>
  </nav>
  );
};

export default Navbar;