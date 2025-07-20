import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DesignerEducation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 60 });
    const handlePageShow = () => AOS.refreshHard();
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const educationData = [
    {
      degree: "Master in Computer Application",
      institution: "GIFT AUTONOMOUS, BBSR",
      year: "2026",
      grade: "8.74 CGPA",
    },
    {
      degree: "Bachelor of Science in Zoology",
      institution: "F.M University, BALASORE",
      year: "2024",
      grade: "7.84 CGPA",
    },
    {
      degree: "CHSE",
      institution: "JAMBHESHWAR MAHAVIDYALAYA, BALASORE",
      year: "2021",
      grade: "73%",
    },
    {
      degree: "HSCE",
      institution: "U.N NODAL HIGH SCHOOL, SIRAPUR",
      year: "2019",
      grade: "73%",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-black text-white py-12 sm:py-14 md:py-16 overflow-hidden"
    >
      {/* === Background Effects (Optional, consistent with About) === */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-72 h-72 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-pink-500 via-indigo-500 to-blue-400 opacity-25 rounded-full blur-[150px] animate-[spin_40s_linear_infinite]"></div>
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="eduGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#eduGrid)" />
        </svg>
      </div>

      {/* === Content Wrapper === */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* === Section Title === */}
        <h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 tracking-tight"
          data-aos="fade-up"
        >
          <span className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 bg-clip-text text-transparent">
            🎓 My Education
          </span>
        </h2>

        {/* === Education Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" data-aos="fade-up" data-aos-delay="200">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative group rounded-2xl border border-white/5 bg-white/10 p-5 sm:p-6 transition duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              {/* Year Badge */}
              <div className="absolute -top-3 left-4 sm:left-5 bg-indigo-500 text-white text-xs sm:text-sm font-semibold px-2 py-0.5 rounded-full shadow-md">
                {edu.year}
              </div>

              {/* Degree Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 break-words whitespace-normal">
                {edu.degree}
              </h3>

              {/* Institution Name */}
              <p className="text-sm sm:text-base text-gray-300 mb-3 break-words whitespace-normal">
                {edu.institution}
              </p>

              {/* Grade */}
              <div className="flex justify-between flex-wrap text-sm sm:text-base text-gray-400 pt-3 border-t border-white/10">
                <span>🎖 Grade</span>
                <span>{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Grow Ring Keyframe (optional for shared style) === */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default DesignerEducation;
