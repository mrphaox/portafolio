import React from "react";
import { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
  description: string;
}

const ExperienceCard = ({ title, subTitle, icon, description }: Props) => {
  return (
    <div className="flex items-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 shadow-md gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{subTitle}</p>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
