import { MdOutlineWavingHand } from "react-icons/md";
import Particle from "../components/Particle";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-particles">
        <Particle />
      </div>

      <div className="home-page-welcome">
        <h2>Hello</h2>
        <MdOutlineWavingHand size={32} className="waving-hand" />
        <h2>I'm</h2>
      </div>

      <h1>Radim Pukalík</h1>
      <h2>Junior React developer</h2>

      {/* <div className="home-page-text">
        <p>
          I'm passionate about creating responsive and user-friendly web
          applications. Currently, I'm exploring React.
        </p>
        <p>
          Much of my knowledge is self-taught, complemented by my studies at
          university.
        </p>
        <p>
          In my free time, I enjoy learning new technologies and continually
          enhancing my skills.
        </p>
      </div> */}
    </div>
  );
};

export default HomePage;
