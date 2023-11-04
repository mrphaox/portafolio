import {GiSkills} from "react-icons/gi"
import Title from "./Title"
import SkillInput from "./SkillInput";

const Skills= () => {
  return (
    <div className="wrapper">
        <Title text="skills" icon={<GiSkills/>}/>
        <br/>
        <div className="flex gap-4 flex-wrap">
          <br/>
         <SkillInput title="Javascript" link="https://lenguajejs.com/javascript/"/>
         <br/>
         <SkillInput title="React.js" link="https://legacy.reactjs.org/docs/getting-started.html"/>
         <br/>
         <SkillInput title="Next.js" link="https://nextjs.org/docs"/>
         <br/>
         <SkillInput title="node.js" link="https://nodejs.org/en/docs"/>
         <br/>
         <SkillInput title="TypeScript" link="https://www.typescriptlang.org/docs/"/>
         <br/>
         <SkillInput title="mongoDB" link="https://www.mongodb.com/docs/"/>
         <br/>
         <SkillInput title="mySql" link="https://dev.mysql.com/doc/"/>
         <br/>
         <SkillInput title="html5 & css3 " link="https://codepen.io/sunbun2461/pen/ePKywV"/>
         <br/>
         <SkillInput title="machine learning" link="https://ml-cheatsheet.readthedocs.io/en/latest/"/>
         <br/>
         <SkillInput title="python" link="https://www.python.org/doc/"/>
         <br/>        
        </div>
        </div>
  )
}

export default Skills;