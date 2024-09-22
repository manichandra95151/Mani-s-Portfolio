import { DiMongodb } from "react-icons/di";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPostman, SiRedux } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import mvc from '../Data/imgaes/mvc.png';

export const skills = [
    {
      mainHeading: "Frontend",
      subSkills: [
        { name: "React.js", icon: FaReact },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: RiTailwindCssFill },
      ],
    },
    {
      mainHeading: "Tools & Methodology",
      subSkills: [
        { name: "Postman", icon: SiPostman },
        { name: "MVC Architecture", icon:mvc},
        { name: "GitHub", icon: FaGithub },
        { name: "REST API", icon: TbApi },
        { name: "Redux", icon: SiRedux },
      ],
    },
    {
      mainHeading: "Backend",
      subSkills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: DiMongodb },
        { name: "Express.js", icon: SiExpress },
      ],
    },
    
    {
      mainHeading: "Programming Languages",
      subSkills: [
        { name: "Java", icon: FaJava }, // Just using FaNodeJs for an example; replace with a Java icon if you have one
      ],
    },
    
  ];
