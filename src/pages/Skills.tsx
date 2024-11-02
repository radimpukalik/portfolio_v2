import { CiDatabase } from "react-icons/ci";
import { DiCss3 } from "react-icons/di";
import { FaGitAlt, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus, SiCsharp, SiSass, SiTypescript } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import Particle2 from "../components/Particle2";

const skills = {
  primary: [
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Typescript", icon: <SiTypescript />, color: "#007acc" },
    { name: "Javascript", icon: <IoLogoJavascript />, color: "#F0DB4F" },
    { name: "HTML", icon: <TfiHtml5 />, color: "#FF5733" },
    { name: "CSS", icon: <DiCss3 />, color: "#007acc" },
    { name: "Sass", icon: <SiSass />, color: "#CD6799" },
    { name: "Tailwind", icon: <RiTailwindCssFill />, color: "#38bdf8" },
    { name: "Git", icon: <FaGitAlt />, color: "#f34f29" },
  ],
  secondary: [
    { name: "Python", icon: <FaPython />, color: "#306998" },
    { name: "C#", icon: <SiCsharp />, color: "#9B4F96" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "SQL", icon: <CiDatabase />, color: "#F29111" },
  ],
};

const Skills = () => {
  return (
    <section className="skills-container">
      <Particle2 />
      <h1 className="header-underline">Primary skills</h1>
      <ul>
        {skills.primary.map((skill, i) => (
          <li key={i}>
            <div className="skills-item-top" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skills-item-bottom">
              <h2>{skill.name}</h2>
            </div>
          </li>
        ))}
      </ul>

      <h1 className="header-underline">Secondary skills</h1>
      <ul>
        {skills.secondary.map((skill, i) => (
          <li key={i}>
            <div className="skills-item-top" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skills-item-bottom">
              <h2>{skill.name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
