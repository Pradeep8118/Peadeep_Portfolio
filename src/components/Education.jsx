import React from "react";

const DesignerEducation = () => {
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
      institution: "JAJAMBESHWAR MAHAVIDYALAYA",
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
      className="bg-gradient-to-b from-black to-[#121111] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12"
    >
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10 sm:mb-14 tracking-tight">
        🎓 My Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative group rounded-2xl border border-white/5 bg-white/10 p-5 sm:p-6 transition duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            {/* Year Badge */}
            <div className="absolute -top-3 left-4 sm:left-5 bg-indigo-500 text-white text-xs sm:text-sm font-semibold px-2 py-0.5 rounded-full shadow-md">
              {edu.year}
            </div>

            {/* Degree Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
              {edu.degree}
            </h3>

            {/* Institution Name */}
            <p className="text-sm sm:text-base text-gray-300 mb-3">{edu.institution}</p>

            {/* Grade */}
            <div className="flex justify-between text-sm sm:text-base text-gray-400 pt-3 border-t border-white/10">
              <span>🎖 Grade</span>
              <span>{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignerEducation;
