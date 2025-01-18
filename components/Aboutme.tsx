import React from "react";
import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const AboutMe = () => {
  return (
    <div className="wrapper p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg">
      <Title text="Sobre Mí" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6 text-gray-300">
        <p className="leading-relaxed">
          Soy un profesional en <strong>Ingeniería de Sistemas</strong> con experiencia en desarrollo 
          front-end y back-end. Me especializo en el desarrollo de componentes web, control de versiones 
          y el uso de tecnologías como <strong>JavaScript</strong>, <strong>React</strong>, y <strong>Next.js</strong>.
        </p>
        <p className="leading-relaxed">
          Mi formación y experiencia me han permitido desarrollar habilidades técnicas sólidas y colaborar 
          eficazmente en equipos de desarrollo. Estoy comprometido con aprender continuamente y contribuir 
          al éxito de proyectos tecnológicos innovadores.
        </p>
        <p className="leading-relaxed">
          Además, tengo experiencia en análisis de datos con <strong>Python</strong> y <strong>SQL</strong>, 
          así como en la implementación de metodologías ágiles como Scrum para la gestión eficiente de proyectos.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
