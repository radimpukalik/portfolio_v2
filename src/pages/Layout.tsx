import HamburgerMenu from "../components/HamburgerMenu";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <SideBar />
      <div className="layout-outlet">
        <Outlet />
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Layout;
