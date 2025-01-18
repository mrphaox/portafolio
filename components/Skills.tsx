import React from "react";
import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillInput from "./SkillInput";

const Skills = () => {
  const skills = [
    { title: "JavaScript", link: "https://lenguajejs.com/javascript/" },
    { title: "React.js", link: "https://legacy.reactjs.org/docs/getting-started.html" },
    { title: "Next.js", link: "https://nextjs.org/docs" },
    { title: "Node.js", link: "https://nodejs.org/en/docs" },
    { title: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
    { title: "MongoDB", link: "https://www.mongodb.com/docs/" },
    { title: "MySQL", link: "https://dev.mysql.com/doc/" },
    { title: "HTML & CSS", link: "https://codepen.io/sunbun2461/pen/ePKywV" },
    { title: "Machine Learning", link: "https://ml-cheatsheet.readthedocs.io/en/latest/" },
    { title: "Python", link: "https://www.python.org/doc/" },
    { title: "Django", link: "https://docs.djangoproject.com/en/3.2/" },
    { title: "Flask", link: "https://flask.palletsprojects.com/en/2.0.x/" },
    { title: "Git", link: "https://git-scm.com/doc" },
    { title: "Docker", link: "https://docs.docker.com/" },
    { title: "Kubernetes", link: "https://kubernetes.io/docs/" },
    { title: "AWS", link: "https://docs.aws.amazon.com/" },
    { title: "Azure", link: "https://docs.microsoft.com/en-us/azure/" },
    { title: "Testing", link: "https://www.guru99.com/software-testing.html" },
    { title: "Scrum", link: "https://www.scrum.org/resources/what-is-scrum" },
    { title: "RESTful APIs", link: "https://restful"},
    { title: "GraphQL", link: "https://graphql.org/learn/" },
    { title: "Microservices", link: "https://microservices.io/" },
    { title: "WebSockets", link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
    { title: "Figma", link: "https://www.figma.com/resources/learn/" },
    { title: "Sketch", link: "https://www.sketch.com/docs/" },
    { title: "Jira", link: "https://support.atlassian.com/jira-software-cloud/" },
    { title: "Trello", link: "https://help.trello.com/" },
    { title: "Slack", link: "https://slack.com/help" },
    { title: "Discord", link: "https://support.discord.com/hc/en-us" },
    { title: "Zoom", link: "https://support.zoom.us/hc/en-us" },
    { title: "Google Meet", link: "https://support.google.com/meet" },
    { title: "Microsoft Teams", link: "https://support.microsoft.com/en-us/teams" },
    { title: "Web Development", link: "https://developer.mozilla.org/en-US/docs/Learn" },
    { title: "Data Analysis", link: "https://www.datacamp.com/courses/data-analyst-with-python" },
    { title: "UI/UX Design", link: "https://www.interaction-design.org/literature/topics/ux-design" },
    { title: "SEO", link: "https://moz.com/learn/seo" },
    { title: "Customer Service", link: "https://www.salesforce.com/products/service-cloud/what-is-customer-service/" },
    { title: "Finance", link: "https://www.investopedia.com/financial-term-dictionary-4769738" },
    { title: "Management", link: "https://www.managementstudyguide.com/management_tutorials.htm" },
    { title: "Leadership", link: "https://www.mindtools.com/pages/main/newMN_LDR.htm" },
    { title: "Communication", link: "https://www.skillsyouneed.com/ips/what-is-communication.html" },
    { title: "Problem Solving", link: "https://www.skillsyouneed.com/ps/problem-solving.html" },
    { title: "Teamwork", link: "https://www.skillsyouneed.com/ips/teamwork.html" },
    { title: "Creativity", link: "https://www.skillsyouneed.com/ps/creative-problem-solving.html" },
    { title: "Adaptability", link: "https://www.skillsyouneed.com/ps/adaptability.html" },
    { title: "Time Management", link: "https://www.skillsyouneed.com/ps/time-management.html" },
    { title: "Critical Thinking", link: "https://www.skillsyouneed.com/ps/critical-thinking.html" },
    { title: "Emotional Intelligence", link: "https://www.skillsyouneed.com/ps/emotional-intelligence.html" },
    { title: "Back-end", link: "" },
    { title: "Front-end", link: "" },
    { title: "Full Stack", link: "" },
    { title: "Machine Learning", link: "" },
    { title: "Artificial Intelligence", link: "" },
    { title: "Software Development", link: "" },
    { title: "Web Development", link: "" },
    { title: "Database Management", link: "" },
    { title: "Project Management", link: "" },
    { title: "UI/UX Design", link: "" },
    { title: "Quality Assurance", link: "" },
    { title: "Customer Service", link: "" },
    { title: "Finance", link: "" },
    { title: "Management", link: "" },
    { title: "Leadership", link: "" },
    { title: "Emotional Intelligence", link: "" },

  ];

  return (
    <div className="wrapper p-6 bg-gray-900 rounded-lg shadow-lg">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill) => (
          <SkillInput key={skill.title} title={skill.title} link={skill.link} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
