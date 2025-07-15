import React from "react";
import { FaCode, FaLaptopCode, FaJava, FaCuttlefish } from "react-icons/fa";
import Aboutimg from "../assets/About.png";

const About = () => {
  return (
    <section className="bg-black text-white py-16 md:py-20" id="about">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 tracking-wide">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
          <div className="w-20 sm:w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        {/* Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
              I'm a passionate <span className="text-indigo-400 font-semibold">MCA student</span> with strong skills in software development, programming, and web technologies. My journey blends academic theory with hands-on coding and project experience.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
              I love creating full-stack apps, solving algorithmic problems, and exploring core programming languages. Always curious and eager to learn, I enjoy collaborating on real-world projects and using tech to make a difference.
            </p>

            {/* Skills Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 justify-items-center">
              <div className="flex flex-col items-center text-center">
                <FaCode size={32} className="text-indigo-500 mb-2" />
                <p className="text-sm text-gray-300">MERN Stack</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaLaptopCode size={32} className="text-purple-500 mb-2" />
                <p className="text-sm text-gray-300">Web Dev</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaJava size={32} className="text-orange-400 mb-2" />
                <p className="text-sm text-gray-300">Java</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaCuttlefish size={32} className="text-blue-400 mb-2" />
                <p className="text-sm text-gray-300">C Language</p>
              </div>
            </div>
          </div>

          {/* Square Glassy Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group transition-transform duration-700 ease-in-out hover:scale-110">
              
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500 via-blue-400 to-cyan-300 blur-2xl opacity-40 z-0 transition-opacity duration-500 group-hover:opacity-60"></div>

              {/* Inner Glass */}
              <div className="absolute inset-0 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 shadow-inner z-10"></div>

              {/* Image */}
              <img
                src={Aboutimg}
                alt="About"
                className="relative z-20 w-full h-full object-cover rounded-2xl border-4 border-white/10 shadow-2xl transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
