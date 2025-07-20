import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaCode,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaJava,
  FaTools,
} from "react-icons/fa";
import { SiTailwindcss, SiC, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "C Language", icon: <SiC className="text-blue-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
  { name: "HTML / CSS", icon: <FaCode className="text-orange-300" /> },
  { name: "JavaScript", icon: <FaCode className="text-yellow-400" /> },
  { name: "Git & GitHub", icon: <FaTools className="text-purple-300" /> },
];

const SkillSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 60,
    });

    const handlePageShow = () => AOS.refreshHard();
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-black to-[#121111] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12"
    >
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10 sm:mb-14 tracking-tight">
        🛠 My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            className="flex flex-col items-center justify-center bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-base sm:text-lg text-gray-300 font-medium break-words whitespace-normal text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
