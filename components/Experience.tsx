import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiThingiverse,SiNextdotjs } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experencies" icon={<MdWork />} />
      <div className=" grind grind-cols-1 md:grind-cols-2 gap-10">
        <br/>
        <ExperienceCard
        title="telePerformance"
        subTitle="desarollador web 01/2022 - 01/2023"
        icon={<SiThingiverse/>}
        />
        <br/>
        <ExperienceCard
        title="freeLance"
        subTitle="desarollador web 01/2020 - 01/2021"
        icon={<SiNextdotjs/>}   
        />
        <br/>
        <ExperienceCard
        title="freeLance"
        subTitle="full stack in ecomers  01/2023 - 05/2023"
        icon={<SiNextdotjs/>} 
        />
        {/*
        <ExperienceCard
        title=""
        subtitle=""
        icon={<SiThingiverse/>} 
        />*/}
      </div>
    </div>
  );
};

export default Experience;
