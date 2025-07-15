import React from 'react';
import HeroImage from '../assets/HeroImage.png';

const Home = () => {
  return (
    <div id='home' className="bg-black text-white py-20 px-4 text-center min-h-screen flex flex-col items-center justify-center">
      
      {/* Profile Image with Modern Background Design */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-8">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-pulse blur-lg opacity-30"></div>
        
        {/* Glassmorphic background */}
        <div className="absolute inset-0 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 shadow-inner shadow-black"></div>

        {/* Profile Image */}
        <img
          src={HeroImage}
          alt="Hero"
          className="relative w-full h-full rounded-full object-cover border-4 border-black shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Name + Role */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Pradeep Patra
        </span>
        , MERN-Stack Developer
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto px-2">
        I specialize in building modern and responsive web applications.
      </p>

      {/* Download Button */}
      <div className="mt-12">
        <a
          href="https://drive.google.com/file/d/1D_Uda9hO_WDW-m3-g-aC__BthCVfT2KO/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium transform transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Home;
