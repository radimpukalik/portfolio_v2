import { Language } from "../components/LanguagesToIcons";
import Particle2 from "../components/Particle2";
import ProjectSlider from "../components/ProjectSlider";

interface Slide {
  languages: Language[];
  images: { url: string; alt: string }[];
  repositoryURL: string;
  liveDemoURL: string;
  slideDescription: string;
}

const SLIDES: Slide[] = [
  {
    languages: ["react", "typescript", "css"],
    images: [
      { url: "./cropped-omdb-1.png", alt: "img 1" },
      { url: "./cropped-omdb-2.png", alt: "img 2" },
      { url: "./cropped-omdb-3.png", alt: "img 3" },
    ],
    repositoryURL: "https://github.com/radimpukalik/OMDb-search",
    liveDemoURL: "https://radimpukalik.github.io/OMDb-search/",
    slideDescription:
      "In this project, I primarily practiced React with TypeScript. It is a straightforward movie search app with the capability of saving favorite movies using local storage.",
  },
  {
    languages: ["react", "typescript", "tailwind"],
    images: [
      { url: "./cropped-capital-game-1.png", alt: "img 1" },
      { url: "./cropped-capital-game-2.png", alt: "img 2" },
      { url: "./cropped-capital-game-3.png", alt: "img 3" },
    ],
    repositoryURL: "https://github.com/radimpukalik/Capital-Match-Game",
    liveDemoURL: "https://radimpukalik.github.io/Capital-Match-Game/",
    slideDescription:
      "In this project, I delved into Tailwind CSS for the first time while continuing to practice and enhance my skills in React and TypeScript.",
  },
  {
    languages: ["javascript", "css"],
    images: [
      { url: "./cropped-alzix-1.png", alt: "img 1" },
      { url: "./cropped-alzix-2.png", alt: "img 2" },
    ],
    repositoryURL: "https://github.com/radimpukalik/Alzix-shop",
    liveDemoURL: "https://radimpukalik.github.io/Alzix-shop/",
    slideDescription:
      "One of my first project, where I practiced JavaScript, HTML, and CSS, involved managing both coding tasks and project responsibilities.",
  },
];

const Projects = () => {
  return (
    <>
      <Particle2 />
      <div className="projects-container">
        {/* <h1 className="header-underline">Frontend Projects</h1> */}
        <div className="projects-project-slider">
          <ProjectSlider slides={SLIDES} />
        </div>
      </div>
    </>
  );
};

export default Projects;
