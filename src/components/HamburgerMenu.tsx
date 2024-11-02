import useSideBarStore from "../sideBarStore";

const HamburgerMenu = () => {
  const { isActive, toggleSideBar } = useSideBarStore();

  const handleClick = () => {
    toggleSideBar();
    // document.body.style.marginLeft = isActive ? "0px" : "200px";
  };

  return (
    <div
      className={`hamburger-menu ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;
