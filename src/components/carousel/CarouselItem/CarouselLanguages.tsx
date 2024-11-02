import { Children, FC, ReactNode } from "react";

const CarouselLanguages: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="carousel-main-top">
      <ul className="item-list">
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselLanguages;
