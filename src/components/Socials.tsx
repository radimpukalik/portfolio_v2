import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://github.com/radimpukalik/" target="_blank">
        <FaGithub size={30} className="socials-icon" />
      </a>
      <a href="https://www.linkedin.com/in/radimpukalik/" target="_blank">
        <FaLinkedin size={30} className="socials-icon" />
      </a>
    </div>
  );
};

export default Socials;
