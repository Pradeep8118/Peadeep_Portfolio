import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import blinkit from "../assets/blinkit.png";
import Nexcent from "../assets/Nexcent.png";
import tability from "../assets/tability.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "Blinkit Website",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    image: blinkit,
    github: "https://github.com/Pradeep8118/Qlith--Blikint-Clone",
    preview: "https://qlith-blikint-clone.vercel.app/",
    description:
      "Completed in 3 days at Qlith Innovation Pvt. Ltd. using HTML, Tailwind CSS, and JavaScript. Fully responsive clone of Blinkit.",
  },
  {
    id: 2,
    name: "Nexcent",
    technologies: ["HTML", "CSS"],
    image: Nexcent,
    github:
      "https://github.com/Pradeep8118/MERN02M002/tree/main/June/Week1/Day3/Assignment3",
    preview: "https://nexcent-pradeep.netlify.app/",
    description:
      "A modern landing page created in 1 day using HTML and CSS during Qlith training. Mobile-friendly and pixel-perfect design.",
  },
  {
    id: 3,
    name: "Tability",
    technologies: ["HTML", "CSS"],
    image: tability,
    github:
      "https://github.com/Pradeep8118/MERN02M002/tree/main/June/Week2/Tability%20Raja%20Assignment",
    preview: "https://tabilityqlith.netlify.app/",
    description:
      "Built using HTML and CSS in 2 days. A clean, responsive UI design based on the Tability landing page.",
  },
];

const techIcons = {
  HTML: <FaHtml5 className="text-orange-500" title="HTML5" />,
  CSS: <FaCss3Alt className="text-blue-500" title="CSS3" />,
  JavaScript: <FaJs className="text-yellow-400" title="JavaScript" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />,
  React: <FaReact className="text-blue-300" title="React" />,
};

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 80 });
    window.addEventListener("pageshow", () => AOS.refreshHard());
  }, []);

  return (
    <section className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">💼 My Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex gap-3 mb-4 text-2xl">
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{techIcons[tech]}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-medium hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 shadow hover:shadow-indigo-500/30"
                  >
                    🔗 GitHub
                  </a>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-medium hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 shadow hover:shadow-indigo-500/30"
                  >
                    🚀 Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
