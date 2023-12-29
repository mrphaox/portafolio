import React from "react";
import ImgPage from "../public/img/imgPage.jpeg";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10 ">
      {/*image*/}
      <div className="w-44 h-44 rounded-full items-center bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-emerald-500 p-2 object-cover"
          src={ImgPage}
          alt="ImgPage"
        />
      </div>
      {/*descripcion*/}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-white">
          {" "}
          Oscar Alberto Neira Vaca
        </h1>
        <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 ">
          Ingeniero De Sistemas | Full Stack Developer in Next.js
        </h3>
        <div className="w-full h-full rounded-full border-[2px] items-center border-emerald-200 p-2 object-cover">
          <p className="text-base tracking-wide md:text-left text-justify p-4">
            Soy un estudiante de ingeniería de sistemas enfocado en el
            desarrollo web con el framework Next.js. Poseo habilidades en el
            manejo de lenguajes de programación como PHP, Java, Python,
            JavaScript, Node.js, Angular Js, React.js, CSS, HTML. Además, tengo
            experiencia en el manejo de bases de datos, metodologías ágiles,
            maching-learning y deep-learning.
          </p>
        </div>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/oscar-alberto-neira-vaca-75b387259/" className="icon">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/mrphaox" className="icon">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Banner;
