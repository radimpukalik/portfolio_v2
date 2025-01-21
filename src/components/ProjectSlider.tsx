import { GiExitDoor } from "react-icons/gi";
import ImageSlider from "./ImageSlider";
import { FC, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LanguagesToIcons, { Language } from "./LanguagesToIcons";

interface ISlides {
  slides: {
    languages: Language[];
    images: { url: string; alt: string }[];
    repositoryURL: string;
    liveDemoURL: string;
    slideDescription: string;
  }[];
}

const ProjectSlider: FC<ISlides> = ({ slides }) => {
  const [currIndex, setCurrIndex] = useState<number>(0);

  const handleNextPageClick = () => {
    setCurrIndex((prev) => {
      if (prev === slides.length - 1) return 0;
      return prev + 1;
    });
  };

  const handlePrevPageClick = () => {
    setCurrIndex((prev) => {
      if (prev === 0) return slides.length - 1;
      return prev - 1;
    });
  };

  const handleBulletPointClick = (index: number) => {
    setCurrIndex(index);
  };

  return (
    <div className="project-slider-container">
      <button
        className="project-slider-nav project-slider-nav-prev"
        onClick={handlePrevPageClick}
      >
        <FaChevronLeft className="nav-icon" />
      </button>
      <div className="project-slider-slider">
        {slides.map((slide, index) => (
          <section
            className="project-slider"
            style={{ translate: `${-100 * currIndex}%` }}
            key={index}
          >
            <div className="project-slider-languages">
              <LanguagesToIcons languages={slide.languages} />
            </div>

            <div className="project-slider-image-slider">
              <ImageSlider images={slide.images} />
            </div>

            {/* <div className="project-slider-text">
              <p>{slide.slideDescription}</p>
            </div> */}

            <div className="project-slider-bottom">
              <div className="project-slider-bottom-buttons">
                <a
                  className="project-slider-bottom-buttons-git"
                  href={slide.repositoryURL}
                >
                  Github
                  <GiExitDoor />
                </a>
                <div className="project-slider-bottom-buttons-dots">
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      className={`project-slider-bottom-buttons-dots-dot ${
                        i === currIndex && "active"
                      }`}
                      onClick={() => handleBulletPointClick(i)}
                    ></div>
                  ))}
                </div>
                <a
                  className="project-slider-bottom-buttons-view"
                  href={slide.liveDemoURL}
                >
                  Site
                  <GiExitDoor />
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
      <button
        className="project-slider-nav project-slider-nav-next"
        onClick={handleNextPageClick}
      >
        <FaChevronRight className="nav-icon" />
      </button>
    </div>
  );
};

export default ProjectSlider;
