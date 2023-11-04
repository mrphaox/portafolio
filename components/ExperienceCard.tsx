import { ReactNode } from "react";

interface props{
    title: string;
    subTitle: string;
    icon: ReactNode
}
const ExperienceCard = ({title,subTitle,icon}:props) => {
  return (
    <div className="flex items-center">
        <span className="w-12 h-12 rounded-full bg-black border-[1px]
         border-blue-600 flex items-center justify-center mr-4">
          {icon}
        </span>
        <div className="flex flex-col justify-center">
        <h3 className=" text-2xl font-bold "><br/>{title}</h3>
        <p> {subTitle} </p>
        </div>    
      </div>
  ) 
}

export default ExperienceCard