import { Children, FC, ReactNode, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselItem from "./CarouselItem";
import CarouselContext from "../../contexts/CarouselContext";

interface Props {
  children: ReactNode;
}

const Carousel: FC<Props> & { Item: typeof CarouselItem } = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const items = Children.toArray(children);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-prev" onClick={handlePrev}>
        <FaChevronLeft />
      </button>

      <CarouselContext.Provider value={{ activeIndex, setActiveIndex, items }}>
        <div className="carousel-main">{items[activeIndex]}</div>
      </CarouselContext.Provider>

      <button className="carousel-next" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;
