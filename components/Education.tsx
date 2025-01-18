import React from "react";
import { FaGraduationCap, FaCertificate, FaSchool } from "react-icons/fa";
import Title from "./Title";

const Education = () => {
  const educationData = [
    {
      institution: "Universidad Santo Tomas Seccional Tunja",
      degree: "Ingeniería de Sistemas",
      duration: "2019 - 2024",
      description:
        "Estudios centrados en el desarrollo de software, bases de datos, y tecnologías emergentes como inteligencia artificial y machine learning.",
      icon: <FaSchool />,
    },
    {
      institution: "Curso de Next.js",
      degree: "Certificado en Desarrollo Full Stack con Next.js",
      duration: "2023",
      description:
        "Especialización en creación de aplicaciones modernas utilizando Next.js, React.js, y Node.js, con énfasis en escalabilidad y buenas prácticas.",
      icon: <FaCertificate />,
    },
    {
      institution: "Curso de Scrum",
      degree: "Certificado en Scrum Master",
      duration: "2023",
      description:
        "Especialización en proyectos con metodología ágil Scrum, con énfasis en escalabilidad y buenas prácticas.",
      icon: <FaCertificate />,
    },
  ];

  return (
    <div className="wrapper p-6 bg-gray-900 rounded-lg shadow-lg">
      <Title text="Educación" icon={<FaGraduationCap />} />
      <div className="flex flex-col gap-6 mt-4">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-blue-500 text-3xl">{edu.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {edu.institution}
              </h3>
              <p className="text-sm text-gray-400">{edu.degree}</p>
              <span className="text-xs text-gray-500">{edu.duration}</span>
              <p className="text-gray-300 mt-2">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
