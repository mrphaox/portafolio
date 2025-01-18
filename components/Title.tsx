import React from "react";
import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center gap-3 text-white text-2xl font-bold mb-4">
      <span>{icon}</span>
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
