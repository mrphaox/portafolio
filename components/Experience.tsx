import React from "react";
import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiThingiverse, SiNextdotjs } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Kai Evolve SAS",
      subTitle: "Desarrollador Web Junior (01/06/2024 - 01/12/2024)",
      description:
        "Junior developer con experiencia en desarrollo de aplicaciones web utilizando Next.js, React.js, ASP.NET y .NET 8. Conocimientos básicos en patrón MVC y diseño de aplicaciones escalables.",
      icon: <SiThingiverse />,
    },
    {
      title: "Litios.sas",
      subTitle: "Desarrollador Web (01/2023 - 06/2023)",
      description:
        "Desarrollé aplicaciones personalizadas para clientes, enfocándome en soluciones escalables y adaptables usando frameworks modernos.",
      icon: <SiNextdotjs />,
    },
  ];

  return (
    <div className="wrapper p-6 bg-gray-900 rounded-lg shadow-lg">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            subTitle={exp.subTitle}
            description={exp.description}
            icon={exp.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
