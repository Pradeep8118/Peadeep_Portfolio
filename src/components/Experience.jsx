import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase } from "react-icons/fa";

const ExperiencePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 80 });
    window.addEventListener("pageshow", () => AOS.refreshHard());
  }, []);

  const experience = {
    title: "MERN STACK Developer Intern",
    company: "QLITH INNOVATION PVT. LTD. BBSR",
    period: "June 2025 - July 2025",
    description:
      "During my internship, I developed and maintained scalable web interfaces using React.js and Tailwind CSS. I collaborated closely with UI/UX designers to build pixel-perfect pages and improved loading performance by 30%. I also gained experience in component-based architecture and modern frontend tooling.",
    logo: "qlithinnovation_logo.png", // Place your logo in /public/images/
  };

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-black via-neutral-900 to-black text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          💼 My Experience
        </h2>

        {/* Experience Card */}
        <div
          data-aos="fade-up"
          className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl shadow-xl hover:shadow-indigo-500/20 transition duration-300 px-6 py-8 sm:px-8 sm:py-10 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-20 h-20 object-contain rounded-xl border border-white/10 bg-white/10 p-2"
            />
          </div>

          {/* Info */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                <FaBriefcase className="text-indigo-500 text-xl" />
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {experience.title}
                </h3>
              </div>
              <span className="inline-block text-xs bg-indigo-600/80 px-3 py-1 rounded-full text-white whitespace-nowrap">
                {experience.period}
              </span>
            </div>

            <p className="text-gray-300 text-sm mb-1">{experience.company}</p>

            <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
