"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import ProfileImage from "../public/img/imgPage.jpeg";

const Banner = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="wrapper flex flex-col md:flex-row items-center gap-10 p-6 bg-gray-900 rounded-lg shadow-lg"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
      >
        <Image
          src={ProfileImage}
          alt="Oscar Alberto Neira Vaca"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="flex flex-col items-center md:items-start gap-4">
        <h1 ref={titleRef} className="text-5xl font-bold text-white">
          Oscar Alberto Neira Vaca
        </h1>
        <h3 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Ingeniero de Sistemas | Desarrollador Web
        </h3>

        <p className="text-gray-400 text-center md:text-left leading-relaxed">
          Con experiencia en desarrollo de aplicaciones web utilizando{" "}
          <strong>Next.js</strong> y <strong>React</strong> y conocimientos en
          frameworks modernos como <strong>ASP.NET</strong> y <strong>Angular</strong>. Apasionado por crear
          soluciones innovadoras y escalables.
        </p>

        <div className="flex gap-4">
          <a href="mailto:oneira1323@gmail.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-lg shadow-md"
            >
              Contáctame
            </motion.button>
          </a>
          <a href="https://github.com/mrphaox" target="_blank">
            <FaGithub size={28} className="text-gray-400 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-alberto-neira-vaca-75b387259/"
            target="_blank"
          >
            <FaLinkedin
              size={28}
              className="text-blue-500 hover:text-blue-700"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
