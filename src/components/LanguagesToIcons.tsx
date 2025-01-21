import { FC } from "react";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export type Language = "react" | "typescript" | "javascript" | "tailwind" | "css";

interface Props {
  languages: Language[];
}

const LanguagesToIcons: FC<Props> = ({ languages }) => {
  const languageToIcon: Record<Language, JSX.Element> = {
    react: <FaReact color="#61DBFB" className="language-to-icons-icon" />,
    typescript: <SiTypescript color="#007acc" className="language-to-icons-icon" />,
    javascript: (
      <IoLogoJavascript color="#F0DB4F" className="language-to-icons-icon" />
    ),
    tailwind: (
      <RiTailwindCssFill color="#38bdf8" className="language-to-icons-icon" />
    ),
    css: <DiCss3 color="#007acc" className="language-to-icons-icon" />,
  };

  return (
    <div className="language-to-icons-container">
      {languages.map((language) => (
        <span key={language} className="language-to-icons">
          {languageToIcon[language]}
        </span>
      ))}
    </div>
  );
};

export default LanguagesToIcons;
