"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Buscador de Películas",
    description:
      "Aplicación para buscar películas en la API de TMBD y agregar favoritas.",
    tech: ["Next.js", "TMBD API", "CSS", "git", "Vercel", "react"],
    link: "https://buscador-peliculas-tmbd.vercel.app/",
  },
  {
    title: "TravelJS",
    description:
      "Sitio web con mapas offline y realidad aumentada para viajeros.",
    tech: ["Next.js", "JavaScript", "CSS", "git", "Vercel", "react"],
    link: "https://traveljs.vercel.app/",
  },
  {
    title: "Casa Grande",
    description: "Restaurante con menú interactivo y reservas en línea.",
    tech: ["React", "Node.js", "MongoDB","next.js","CSS","git","Vercel","react","backend","frontend"],
    link: "https://resta-casa-grande.vercel.app/",
  },
  {
    title: "app-pets",
    description:
      "Aplicación para la gestión de mascotas. Los usuarios pueden registrarse, iniciar sesión y agregar información sobre sus mascotas. Está desarrollado con Vue.js, Node.js, Express y MongoDB.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "clusters",
      "CSS",
      "git",
      "Veu.js",
      "react",
      "backend",
      "frontend",
      "nodejs",
    ],
    link: "https://github.com/mrphaox/app-pets",
  },
  {
    title: "Consulta de IPs",
    description: "Consulta de IPs: Busca información sobre cualquier dirección IP ingresada. Diseño moderno e interactivo: Animaciones fluidas con Framer Motion. Historial de búsquedas: Muestra un registro de las IPs consultadas recientemente. Interacción amigable: Botones para Buscar otra IP y Eliminar búsqueda con efectos visuales atractivos..",
    tech: ["React", "next.js", "CSS", "git", "Vercel", "react"],
    link: "https://raster-ips.vercel.app/",
  },
  {
    title: "Modelos de machin y Deep Learning",
    description: "Modelos de machin y Deep Learning con Python y TensorFlow.",
    tech: ["Python", "Anaconda", "MongoDB", "TensorFlow","machine learning","deep learning"],
    link: "https://github.com/mrphaox/deep-learning",
  },
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("Todos");

  const filteredProjects =
    selectedTech === "Todos"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedTech));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 bg-gray-900 rounded-lg shadow-lg"
    >
      <h2 className="text-white text-3xl font-bold text-center mb-6">
        🚀 Proyectos Destacados
      </h2>

      {/* Filtros por tecnología */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {["Todos", "Next.js", "React", "Node.js","Python"].map((tech) => (
          <button
            key={tech}
            className={`px-4 py-2 rounded-md font-semibold ${
              selectedTech === tech
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            } hover:bg-blue-600 transition`}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Tarjetas de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Tecnologías utilizadas */}
            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Enlace al proyecto */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition"
            >
              <span className="font-semibold">Ver Proyecto</span>
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
