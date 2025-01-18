import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ProfileImage from "../public/img/imgPage.jpeg"; // Reemplaza con la imagen correcta

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10 p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Imagen de Perfil */}
      <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
        <Image
          src={ProfileImage}
          alt="Oscar Alberto Neira Vaca"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Información Personal */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <h1 className="text-5xl font-bold text-white animate-fadeIn">
          Oscar Alberto Neira Vaca
        </h1>
        <h3 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Ingeniero de Sistemas | Desarrollador Web
        </h3>
        <p className="text-gray-400 text-center md:text-left leading-relaxed">
          Con experiencia en desarrollo de aplicaciones web utilizando <strong>Next.js</strong> y <strong>React</strong>, 
          y conocimientos en frameworks modernos como <strong>ASP.NET</strong> y <strong>Angular</strong>. 
          Apasionado por crear soluciones innovadoras y escalables.
        </p>
        {/* Botones */}
        <div className="flex gap-4">
        <a href="mailto:oneira1323@gmail.com" aria-label="Enviar correo">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-600 hover:shadow-lg transition duration-300">
          Contáctame
        </button>
      </a>
          <a
            href="https://github.com/mrphaox"
            target="_blank"
            aria-label="Github"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-alberto-neira-vaca-75b387259/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
