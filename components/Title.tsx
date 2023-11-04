import { ReactNode } from "react";

interface props{
    text:string;
    icon:ReactNode;
}
const Title = ({text,icon}:props) => {
  return (
    <div className="wrapper">
      <div className="flex items-center gap-4 text-2x1 group pb-8S">
        <h2 className="font-semibold relative overflow-hidden">
          {text}{}
          <span
            className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-emerald-500 -translate-x-[100%] 
          group-hover:translate-x-0 transition-transform duration-300"
          ></span>
        </h2>
        <span className="text-blue-600">{icon}</span>
        
      </div>
    </div>
  );
};

export default Title;
