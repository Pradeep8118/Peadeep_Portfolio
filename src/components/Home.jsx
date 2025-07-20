import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeImage from "../assets/HomeImage.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 80 });
    window.addEventListener("pageshow", () => AOS.refreshHard());
  }, []);

  return (
    <div
      id="home"
      className="relative bg-black text-white overflow-hidden px-4 py-24 sm:py-32 min-h-screen flex items-center justify-center"
    >
      {/* === Foreground Content === */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        
        {/* === Profile Image === */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56" data-aos="zoom-in">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-40 animate-grow-ring"></div>
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-inner shadow-black"></div>
          <img
            src={HomeImage}
            alt="Pradeep Patra"
            className="relative w-full h-full rounded-full object-cover border-4 border-black shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* === Heading === */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-text-glow transition-all duration-500 hover:scale-105 hover:text-white hover:drop-shadow-glow cursor-pointer"
          data-aos="fade-up"
        >
          I'm Pradeep Patra, MERN-Stack Developer
        </h1>

        {/* === Subheading === */}
        <p
          className="mt-2 text-sm sm:text-base md:text-lg text-blue-400 max-w-xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I specialize in building modern and responsive web applications.
        </p>

        {/* === CTA Button === */}
        <div data-aos="zoom-in-up" data-aos-delay="600">
          <a
            href="https://drive.google.com/file/d/1D_Uda9hO_WDW-m3-g-aC__BthCVfT2KO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-blue-500/40"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* === Background Effects === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 opacity-20 rounded-full blur-[140px] animate-[spin_40s_linear_infinite]"></div>
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* === Custom Animations === */}
      <style>{`
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59,130,246,0.8), 0 0 20px rgba(59,130,246,0.6);
          }
          50% {
            text-shadow: 0 0 20px rgba(34,211,238,0.8), 0 0 40px rgba(168,85,247,0.6);
          }
        }
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        .hover\\:drop-shadow-glow:hover {
          text-shadow: 0 0 10px rgba(34,211,238,0.8), 0 0 25px rgba(147,51,234,0.7), 0 0 30px rgba(59,130,246,0.8);
        }
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
    </div>
  );
};

export default Home;
