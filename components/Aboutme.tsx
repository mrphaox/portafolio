import React from "react";
import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper items-center">
      <Title text="About Me" icon=<SiInformatica/>/>
      <div className=" text-lg tracking-wide flex-col gap-6">
      <p className=" items-center">
        <br/>
        Mi objetivo es aplicar mis habilidades y conocimientos en el desarrollo
        web y en el análisis de datos para crear soluciones innovadoras y
        eficientes para las necesidades de mis clientes y usuarios.

         Me apasiona aprender sobre nuevas tecnologías y tendencias en el campo de la
        programación y estoy constantemente buscando oportunidades para mejorar
        mis habilidades y conocimientos. He trabajado en varios proyectos de
        fullStack utilizando el framework Next.js y he obtenido habilidades
        sólidas en el desarrollo de aplicaciones web, creación de bases de
        datos, pruebas y optimización de rendimiento. Además, he trabajado en
        proyectos de análisis de datos utilizando lenguajes de programación como
        Python y SQL, y he obtenido habilidades en la limpieza, transformación y
        visualización de datos. </p>
        <br/>
        Soy un trabajador comprometido y un jugador de equipo colaborativo que busca contribuir al éxito de cualquier proyecto
        en el que participe. Estoy emocionado de explorar nuevas oportunidades
        en el campo de la ingeniería de sistemas y el desarrollo web.
      </div>
    </div>
  );
};

export default Aboutme;
