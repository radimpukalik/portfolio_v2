import { FC, ReactNode } from "react";
import CarouselImages from "./CarouselImages";
import CarouselButtons from "./CarouselButtons";
import CarouselLanguages from "./CarouselLanguages";

interface CarouselItemSubcomponents {
  Languages: typeof CarouselLanguages;
  Images: typeof CarouselImages;
  Buttons: typeof CarouselButtons;
}

const CarouselItem: FC<{ children: ReactNode }> & CarouselItemSubcomponents = ({
  children,
}) => {
  return <div className="carousel-item">{children}</div>;
};

CarouselItem.Languages = CarouselLanguages;
CarouselItem.Images = CarouselImages;
CarouselItem.Buttons = CarouselButtons;

export default CarouselItem;
