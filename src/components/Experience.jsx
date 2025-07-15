import React from "react";
import { FaBriefcase } from "react-icons/fa";

const ExperiencePage = () => {
  const experience = {
    title: "MERN STACK Devloper Intern",
    company: "QLITH INNOVATION PVT. LTD. BBSR",
    period: "June 2025 - July 2025",
    description:
      "During my internship, I developed and maintained scalable web interfaces using React.js and Tailwind CSS. I collaborated closely with UI/UX designers to build pixel-perfect pages and improved loading performance by 30%. I also gained experience in component-based architecture and modern frontend tooling.",
    logo: "qlithinnovation_logo.png", // Place your logo in /public/images/
  };

  return (
    <section  id="experience" className="bg-gradient-to-b from-black via-neutral-900 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          💼 My Experience
        </h2>

        {/* Experience Card */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl shadow-xl hover:shadow-indigo-500/20 transition duration-300 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-20 h-20 object-contain rounded-xl border border-white/10 bg-white/10 p-2"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <FaBriefcase className="text-indigo-500 text-xl" />
              <h3 className="text-xl font-semibold">{experience.title}</h3>
            </div>
            <p className="text-gray-300 text-sm">{experience.company}</p>
            <span className="mt-1 inline-block text-xs bg-indigo-600/80 px-3 py-1 rounded-full text-white">
              {experience.period}
            </span>

            <p className="text-gray-400 mt-4 leading-relaxed text-sm md:text-base">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
