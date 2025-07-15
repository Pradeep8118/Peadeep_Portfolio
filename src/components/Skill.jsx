import React from "react";
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
  return (
    <section
      id="skills"
      className="bg-black text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <h2 className="text-center text-4xl font-extrabold mb-12 tracking-tight">
        🛠 My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/5 p-5 rounded-xl border border-white/10 hover:border-indigo-500 hover:shadow-indigo-500/30 shadow-md hover:scale-105 transition duration-300 text-center"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-base text-gray-200 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
