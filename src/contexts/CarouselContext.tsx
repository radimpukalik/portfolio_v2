import { createContext, Dispatch, ReactNode } from "react";
interface CarouselContextProps {
  activeIndex: number;
  setActiveIndex: Dispatch<React.SetStateAction<number>>;
  items: ReactNode[];
}

const CarouselContext = createContext<CarouselContextProps | undefined>(
  undefined
);

export default CarouselContext;
