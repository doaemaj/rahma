import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-800 px-24 py-6 pt-5" style={{ backgroundColor: 'rgb(203,213,222)' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* About Section */}
        <div className="mb-4 md:mb-0 md:max-w-[800px]">
          <h3 className="text-xl font-bold mb-2">About us</h3>
          <p className="text-sm lg:text-lg text-justify leading-relaxed">
            Our app serves as a bridge to deepen your connection with Allah through beautifully curated duas, tailored to every emotion and life moment. Explore the profound meaning of the 99 Names of Allah, inspiring mindfulness and reflection. Whether seeking comfort, guidance, or spiritual growth, our app makes faith accessible anytime, anywhere.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-7">
          <a href="#" className="text-gray-800 hover:text-gray-600 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600 text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600 text-xl">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm md:text-md text-gray-600 mt-4">
        Copyright © RAHMA
      </div>
    </footer>
  );
};

export default Footer;
