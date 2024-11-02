import { Link, useLocation } from "react-router-dom";
import Socials from "./Socials";
import useSideBarStore from "../sideBarStore";
import { useEffect, useState } from "react";

const SideBar = () => {
  const { isActive, closeSideBar } = useSideBarStore();
  const [isClicked, setIsClicked] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setIsClicked(location.pathname);
  }, [location]);

  const handleLinkClick = (path: string) => {
    setIsClicked(path);
    if (window.innerWidth < 600) {
      closeSideBar();
    }
  };

  return (
    <aside className={`sidebar-container ${isActive ? "active" : ""}`}>
      <div className="sidebar-top">
        <h1>
          Radim<span>.</span>
        </h1>
      </div>

      <ul className="sidebar-middle">
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <li
            className={`li-button underline ${
              isClicked === "/" ? "active" : ""
            }`}
          >
            Home
          </li>
        </Link>
        <Link to="/skills" onClick={() => handleLinkClick("/skills")}>
          <li
            className={`li-button underline ${
              isClicked === "/skills" ? "active" : ""
            }`}
          >
            Skills
          </li>
        </Link>
        <Link to="/projects" onClick={() => handleLinkClick("/projects")}>
          <li
            className={`li-button underline ${
              isClicked === "/projects" ? "active" : ""
            }`}
          >
            My Projects
          </li>
        </Link>
        <Link to="/contactme" onClick={() => handleLinkClick("/contactme")}>
          <li
            className={`li-button underline ${
              isClicked === "/contactme" ? "active" : ""
            }`}
          >
            Contact me
          </li>
        </Link>
      </ul>

      <div className="sidebar-bottom">
        <footer>
          <p>&copy; Copyright 2024 | All Rights Reserved.</p>
        </footer>
        <Socials />
      </div>
    </aside>
  );
};

export default SideBar;
