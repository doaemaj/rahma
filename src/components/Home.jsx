import React from 'react';
import Navbar from './Navbar';
import bgImage from './image/Bgimage.jpeg';
import bgImage2 from './image/bgHome.png'; // Add the background image for other sections
import AnimatedSection from './AnimatedSection'; // Assurez-vous que le chemin est correct

import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('second-div');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar />
      
      {/* Hero Section with Full Background */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center relative "
        style={{
          backgroundImage: `url(${bgImage})`,
          marginTop: '15px',
        }}
      >
        <div
          className="text-center text-black p-6 max-w-4xl mx-auto"
          style={{ marginTop: '100px' }}
        >          <AnimatedSection>

          <h1 className="text-4xl font-bold font-pacifico mb-4 text-[35px] md:text-[45px] lg:text-[50px]">
            Welcome to Rahma
          </h1>
          <p className="mb-6 font-kotta text-[20px] md:text-[30px] lg:text-[30px]">
            “Your Companion in Faith and Tranquility”
          </p>
          <p className="font-kotta text-[20px] md:text-[25px] lg:text-[28px]">
            Explore a collection of powerful Duas and Dhikr, crafted to guide
            your emotions and strengthen your connection with Allah.
          </p>
          <p className="font-semibold font-kotta text-[15px] md:text-[22px] lg:text-[26px]">
            Start your journey towards inner peace today.
          </p>
          </AnimatedSection>

        </div>
        
        {/* Scroll Button */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transition-transform transform hover:scale-110"
          aria-label="Scroll to next section"
        >
          ↓
        </button>
      </div>

      {/* All sections below with a shared background */}
      <div
        style={{
          backgroundImage: `url(${bgImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Section Dua & Dhikr */}
        <h2
          id="second-div"
          className="text-3xl font-bold font-kotta mb-4 flex items-center justify-start text-[18px] sm:text-[30px] pt-20"
          
        >
          <span className="border-t border-gray-500 flex-grow-0 mr-4 w-1/6"></span>
          Dua & Dhikr
          <span className="border-t border-gray-500 flex-grow ml-4"></span>
        </h2>

        <div className="flex flex-row items-center justify-between p-4 px-10 md:pl-28 border-gray-300">

          <div className="w-full md:w-1/2 pr-8">
          <AnimatedSection>

            <p className="text-gray-800 text-[16px] sm:text-[18px] md:text-[22px] font-Crimson leading-relaxed">
              Dua is a personal prayer to Allah, seeking guidance and blessings,
              while Dhikr involves repeating sacred phrases to strengthen faith
              and tranquility. Explore our collection to deepen your connection
              with Allah.
            </p>
            

            <Link
              to="/category"
              className="text-md md:text-lg font-bold text-black hover:underline"
            >
              Visit ➔
            </Link>
            </AnimatedSection>

          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
          <AnimatedSection>

            <img
              src={('/home1.png')}
              alt="Dua & Dhikr Illustration"
              className="rounded-md shadow-lg max-w-s md:max-w-sm"
            />
                    </AnimatedSection>

          </div>

        </div>

        {/* Section I am feeling */}
        <h2
          className="text-3xl font-bold font-kotta mb-4 flex items-center justify-end text-[18px] sm:text-[30px]"
          style={{ marginTop: 10 }}
        >
          <span className="flex-grow border-t border-gray-500 ml-4 w-1/2"></span>
          I am feeling
          <span className="flex-grow border-t border-gray-500 mr-4"></span>
        </h2>

        <div className="flex flex-row items-center justify-between p-4 px-10 md:pl-0 md:pr-32 border-gray-300">
          <div className="w-full md:w-1/2 flex justify-center items-center">
          <AnimatedSection>

            <img
              src={('/home3.png')}
              alt="Dua & Dhikr Illustration"
              className="rounded-md shadow-lg max-w-s md:max-w-sm"
            />
                    </AnimatedSection>

          </div>
          <div className="w-full md:w-1/2 pl-8">
          <AnimatedSection>

            <p className="text-gray-800 text-[16px] sm:text-[18px] md:text-[22px] font-Crimson leading-relaxed">
              Choose how you're feeling today, and discover Duas and Dhikr that
              can bring comfort, peace, and spiritual strength. Let these
              beautiful prayers guide you through every emotion and bring you
              closer to tranquility.
            </p>
            <Link
              to="/feeling"
              className="text-md md:text-lg font-bold text-black hover:underline"
            >
              Visit ➔
            </Link>
            </AnimatedSection>

          </div>
        </div>

        {/* Section Names of Allah */}
        <h2
          className="text-3xl font-bold font-kotta mb-4 flex items-center justify-start text-[18px] sm:text-[30px]"
          style={{ marginTop: 10 }}
        >
          <span className="border-t border-gray-500 flex-grow-0 mr-4 w-1/6"></span>
          Names of Allah
          <span className="flex-grow border-t border-gray-500 ml-4"></span>
        </h2>

        <div className="flex flex-row items-center justify-between p-4 px-10 md:pl-28 border-gray-300 pb-14" >
          <div className="w-full md:w-1/2 pr-8">
          <AnimatedSection>

            <p className="text-gray-800 text-[16px] sm:text-[18px] md:text-[22px] font-Crimson leading-relaxed">
              Explore the 99 beautiful Names of Allah (Asma-ul-Husna), each
              reflecting His divine attributes. Reciting and reflecting upon
              these names can bring blessings, peace, and a deeper understanding
              of His mercy and power.
            </p>
            <Link
              to="/names-of-allah"
              className="text-md md:text-lg font-bold text-black hover:underline"
            >
              Visit ➔
            </Link>
            </AnimatedSection>

          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
          <AnimatedSection>
            <img
              src={('/home2.png')}
              alt="Dua & Dhikr Illustration"
              className="rounded-md shadow-lg max-w-s md:max-w-sm"
            />
                    </AnimatedSection>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
