import { useState } from "react";
import dataNetflix from "../../data/dataNetflix";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const { image, title, description } = dataNetflix[index];

  const checkMovieNumber = (movieIndex) => {
    if (movieIndex < 0) {
      return dataNetflix.length - 1;
    } else if (movieIndex > dataNetflix.length - 1) {
      return 0;
    } else {
      return movieIndex;
    }
  };

  const nextMovie = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkMovieNumber(newIndex);
    });
  };

  const previousMovie = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkMovieNumber(newIndex);
    });
  };

  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={previousMovie}>
        <FaArrowAltCircleLeft className="my-icon" />
      </button>
      <button onClick={nextMovie}>
        <FaArrowAltCircleRight className="my-icon" />
      </button>
    </div>
  );
};
