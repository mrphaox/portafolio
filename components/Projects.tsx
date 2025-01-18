import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Title from "./Title";

const Projects = () => {
  const projects = [
    {
      title: "Buscador de películas",
      description:
        "Buscador de Películas es una aplicación web que permite buscar información sobre películas utilizando la API de TMBD. Los usuarios pueden agregar películas a favoritos.",
      link: "https://buscador-peliculas-tmbd-j1wmabpne-devphaoxs-projects.vercel.app/",
      technologies: ["Next.js", "TMBD API", "CSS"],
    },
    {
      title: "Front TravelJS",
      description:
        "El sitio web TravelJS fue desarrollado utilizando Next.js, con características avanzadas como mapas fuera de línea y realidad aumentada.",
      link: "https://traveljs.vercel.app/",
      technologies: ["Next.js", "JavaScript", "CSS"],
    },
    {
      title: "Restaurante Casa Grande",
      description:
        "El sitio web del restaurante Casa Grande presenta una experiencia culinaria con platos tradicionales de Boyacá, Colombia.",
      link: "https://github.com/mrphaox/data-visualization-dashboard",
      technologies: ["React", "Node.js", "CSS"],
    },
  ];

  return (
    <div className="wrapper p-6 bg-gray-900 rounded-lg shadow-lg">
      <Title text="Proyectos" icon={<FaLaptopCode />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              className="text-blue-500 hover:text-blue-700 transition duration-300 mt-4"
            >
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
    