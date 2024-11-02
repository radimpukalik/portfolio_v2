import Carousel from "../components/carousel";
import Particle2 from "../components/Particle2";
import CarouselItem from "../components/carousel/CarouselItem";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
const Projects = () => {
  return (
    <>
      <Particle2 />
      <div className="projects-container">
        <h1 className="header-underline">Frontend Projects</h1>
        <Carousel>
          <Carousel.Item>
            <CarouselItem.Languages>
              <FaReact color="#61DBFB" />
              <SiTypescript color="#007acc" />
              <RiTailwindCssFill color="#38bdf8" />
            </CarouselItem.Languages>
            <CarouselItem.Images>
              <CarouselItem.Images.Desktop ImgUrl="./cropped-capital-match-game-desktop.png" />
              <CarouselItem.Images.Mobile ImgUrl="/cropped-capital-match-game-mobile.png" />
            </CarouselItem.Images>
            <CarouselItem.Buttons
              GithubUrl="https://github.com/radimpukalik/Capital-Match-Game"
              ViewUrl="https://radimpukalik.github.io/Capital-Match-Game/"
            />
          </Carousel.Item>

          <Carousel.Item>
            <CarouselItem.Languages>
              <FaReact color="#61DBFB" />
              <SiTypescript color="#007acc" />
              <DiCss3 color="#007acc" />
            </CarouselItem.Languages>
            <CarouselItem.Images>
              <CarouselItem.Images.Desktop ImgUrl="./cropped-OMDB-DEKSTOP.png" />
              <CarouselItem.Images.Mobile ImgUrl="./cropped-OMDB-MOBILE.png" />
            </CarouselItem.Images>
            <CarouselItem.Buttons
              GithubUrl="https://github.com/radimpukalik/OMDb-search"
              ViewUrl="https://radimpukalik.github.io/OMDb-search/"
            />
          </Carousel.Item>

          <Carousel.Item>
            <CarouselItem.Languages>
              <IoLogoJavascript color="#F0DB4F" />
              <DiCss3 color="#007acc" />
            </CarouselItem.Languages>
            <CarouselItem.Images>
              <CarouselItem.Images.Desktop ImgUrl="./cropped-alzix-dekstop.png" />
              <CarouselItem.Images.Mobile ImgUrl="./cropped-alzix-mobile.png" />
            </CarouselItem.Images>
            <CarouselItem.Buttons
              GithubUrl="https://github.com/radimpukalik/Alzix-shop"
              ViewUrl="https://radimpukalik.github.io/Alzix-shop/"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Projects;
