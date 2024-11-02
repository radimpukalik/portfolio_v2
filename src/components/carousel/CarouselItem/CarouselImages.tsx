import { FC, ReactNode } from "react";

const CarouselImageDesktop: FC<{ ImgUrl: string }> = ({ ImgUrl }) => {
  return (
    <div className="carousel-main-middle-desktop">
      <img src={ImgUrl} alt="dekstop-project-img" className="img" />
    </div>
  );
};
const CarouselImageMobile: FC<{ ImgUrl: string }> = ({ ImgUrl }) => {
  return (
    <div className="carousel-main-middle-mobile">
      <img src={ImgUrl} alt="laptop-project-img" className="img" />
    </div>
  );
};

interface CarouselItemSubcomponents {
  Desktop: typeof CarouselImageDesktop;
  Mobile: typeof CarouselImageMobile;
}

const CarouselImages: FC<{ children: ReactNode }> &
  CarouselItemSubcomponents = ({ children }) => {
  return <div className="carousel-main-middle">{children}</div>;
};

CarouselImages.Desktop = CarouselImageDesktop;
CarouselImages.Mobile = CarouselImageMobile;

export default CarouselImages;
