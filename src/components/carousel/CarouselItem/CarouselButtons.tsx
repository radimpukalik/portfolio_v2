import { FC } from "react";
import { GiExitDoor } from "react-icons/gi";
import { useCarousel } from "../../../hooks/useCarousel";

interface Props {
  GithubUrl: string;
  ViewUrl: string;
}

const CarouselButtons: FC<Props> = ({ GithubUrl, ViewUrl }) => {
  const { activeIndex, items, setActiveIndex } = useCarousel();

  return (
    <div className="carousel-main-bottom">
      <a
        className="carousel-main-bottom-github"
        href={GithubUrl}
        target="_blank"
      >
        Github
        <GiExitDoor />
      </a>

      <div className="carousel-main-bottom-indicators">
        {items.map((_, index) => (
          <div
            key={index}
            className={`carousel-main-bottom-indicators-item ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>

      <a className="carousel-main-bottom-view" href={ViewUrl} target="_blank">
        View site
        <GiExitDoor />
      </a>
    </div>
  );
};

export default CarouselButtons;
