import React from "react";
import blinkit from "../assets/blinkit.png";
import Nexcent from "../assets/Nexcent.png";
import movie from "../assets/movie.png";

const projects = [
  {
    id: 1,
    name: "Blinkit Website",
    technologies: "Html/CSS/Javascript",
    image: blinkit,
    github: "https://github.com/Pradeep8118/Qlith--Blikint-Clone",
    preview: "https://qlith-blikint-clone.vercel.app/",
  },
  {
    id: 2,
    name: "Nexcent",
    technologies: "Html/Css",
    image: Nexcent,
    github: "https://github.com/Pradeep8118/Nexcent",
    preview: "https://lnkd.in/eQh78JWv",
  },
  {
    id: 3,
    name: "Movie App",
    technologies: "MERN Stack",
    image: movie,
    github: "https://github.com/Pradeep8118/MERN02M002/tree/main/July/Movie%20App/frontend",
    preview: "https://your-movie-app-preview-link.com", // Replace with actual preview link if available
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.technologies}</p>
                </div>
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm px-4 py-2 rounded-full text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm px-4 py-2 rounded-full text-center"
                  >
                    Preview
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
