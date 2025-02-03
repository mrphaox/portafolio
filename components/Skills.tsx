'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillInput from "./SkillInput";

const allSkills = [
  { title: "JavaScript", category: "Frontend", link: "https://lenguajejs.com/javascript/" },
  { title: "React.js", category: "Frontend", link: "https://legacy.reactjs.org/docs/getting-started.html" },
  { title: "Next.js", category: "Frontend", link: "https://nextjs.org/docs" },
  { title: "Node.js", category: "Backend", link: "https://nodejs.org/en/docs" },
  { title: "TypeScript", category: "Frontend", link: "https://www.typescriptlang.org/docs/" },
  { title: "MongoDB", category: "Database", link: "https://www.mongodb.com/docs/" },
  { title: "MySQL", category: "Database", link: "https://dev.mysql.com/doc/" },
  { title: "Docker", category: "DevOps", link: "https://docs.docker.com/" },
  { title: "Kubernetes", category: "DevOps", link: "https://kubernetes.io/docs/" },
  { title: "Figma", category: "UI/UX", link: "https://www.figma.com/resources/learn/" },
  { title: "GraphQL", category: "Backend", link: "https://graphql.org/learn/" },
  { title: "Django", category: "Backend", link: "https://docs.djangoproject.com/en/3.2/" },
  { title: "Scrum", category: "Methodology", link: "https://www.scrum.org/resources/what-is-scrum" },
];

const categories = ["Todos", "Frontend", "Backend", "Database", "DevOps", "UI/UX", "Methodology"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredSkills =
    selectedCategory === "Todos"
      ? allSkills
      : allSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-6 bg-gray-900 rounded-lg shadow-lg"
    >
      <Title text="💡 Habilidades Técnicas" icon={<GiSkills />} />

      {/* Filtros de Categoría */}
      <div className="flex gap-3 flex-wrap justify-center my-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
            } hover:bg-blue-600`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Lista de Skills en Cajas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        {filteredSkills.map((skill) => (
          <SkillInput key={skill.title} title={skill.title} link={skill.link} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
