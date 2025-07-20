import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaLaptopCode, FaJava, FaCuttlefish } from "react-icons/fa";
import Aboutimg from "../assets/About.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 80 });
    window.addEventListener("pageshow", () => AOS.refreshHard());
    return () => window.removeEventListener("pageshow", () => AOS.refreshHard());
  }, []);

  return (
    <section
      id="about"
      className="relative bg-black text-white py-12 sm:py-14 md:py-16 overflow-hidden"
    >
      {/* === Background Effects === */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-80 h-80 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-gradient-to-tr from-pink-500 via-indigo-500 to-blue-400 opacity-25 rounded-full blur-[140px] animate-[spin_40s_linear_infinite]"></div>
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
      </div>

      {/* === Content === */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12 tracking-wide"
          data-aos="fade-up"
        >
          <span className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 bg-clip-text text-transparent">
            About
          </span>
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">
          {/* === Text Block === */}
          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
              I'm a passionate <span className="text-white font-semibold">MCA student</span> with strong skills in software development, programming, and web technologies.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
              I love creating full-stack apps, solving algorithmic problems, and exploring core programming languages. Always curious and eager to learn, I enjoy collaborating on real-world projects and using tech to make a difference.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 justify-items-center">
              <div className="flex flex-col items-center text-center">
                <FaCode size={30} className="text-indigo-400 mb-1" />
                <p className="text-sm text-gray-300">MERN Stack</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaLaptopCode size={30} className="text-purple-400 mb-1" />
                <p className="text-sm text-gray-300">Web Dev</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaJava size={30} className="text-orange-400 mb-1" />
                <p className="text-sm text-gray-300">Java</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaCuttlefish size={30} className="text-blue-400 mb-1" />
                <p className="text-sm text-gray-300">C Language</p>
              </div>
            </div>
          </div>

          {/* === Image Block === */}
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group transition-transform duration-700 ease-in-out hover:scale-110">
              <div className="absolute inset-0 rounded-2xl border-4 border-cyan-400 opacity-40 animate-grow-ring z-0"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500 via-blue-400 to-cyan-300 blur-2xl opacity-30 z-0 transition-opacity duration-500 group-hover:opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 shadow-inner z-10"></div>
              <img
                src={Aboutimg}
                alt="About"
                className="relative z-20 w-full h-full object-cover rounded-2xl border-4 border-white/10 shadow-2xl transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* === Custom Animation === */}
      <style>{`
        @keyframes grow-ring {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.4; }
        }
        .animate-grow-ring {
          animation: grow-ring 3s ease-in-out infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default About;
