import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";

interface ImageSliderProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currIndex, setCurrIndex] = useState<number>(0);

  const handleNextPageClick = () => {
    setCurrIndex((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    });
  };

  const handlePrevPageClick = () => {
    setCurrIndex((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });
  };

  const handleBulletPointClick = (index: number) => {
    setCurrIndex(index);
  };

  return (
    <section className="image-slider-container">
      <button className="image-slider-button" onClick={handlePrevPageClick}>
        <FaArrowCircleLeft className="image-slider-icon image-slider-button-icon" />
      </button>
      <button className="image-slider-button" onClick={handleNextPageClick}>
        <FaArrowCircleRight className="image-slider-icon image-slider-button-icon" />
      </button>

      <div className="image-slider-pages">
        {images.map((image, i) => (
          <img
            style={{ translate: `${-100 * currIndex}%` }}
            className="image-slider-page-image"
            src={image.url}
            alt={image.alt}
            key={i}
          />
        ))}
      </div>

      <div className="image-slider-bullets">
        {images.map((_, index) => (
          <button
            key={index}
            className="image-slider-bullet"
            onClick={() => handleBulletPointClick(index)}
          >
            {currIndex === index ? (
              <GoDotFill className="image-slider-icon" />
            ) : (
              <GoDot className="image-slider-icon" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
