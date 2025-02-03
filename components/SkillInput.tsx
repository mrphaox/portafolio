'use client'
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@/context/ThemeProvider";
import { useState } from "react";

interface Props {
  title: string;
  link: string;
}

const SkillInput = ({ title, link }: Props) => {
  const { theme } = useTheme();
  const [hover, setHover] = useState(false);

  const props = useSpring({
    transform: hover ? "perspective(600px) rotateY(10deg) rotateX(5deg) scale(1.05)" : "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)",
    config: { mass: 1, tension: 200, friction: 10 },
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <animated.div
        style={props}
        className={`border ${theme === "dark" ? "border-emerald-800 bg-gray-800 text-gray-300" : "border-blue-400 bg-white text-gray-800"} 
        px-6 py-3 text-lg rounded-lg shadow-md hover:shadow-lg transition duration-300 
        flex items-center justify-center cursor-pointer`}
      >
        {title}
      </animated.div>
    </a>
  );
};

export default SkillInput;
