import { useState } from "react";
import dataNetflix from "../../data/dataNetflix";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const { image, title, description } = dataNetflix[index];

  const nextMovie = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return newIndex;
    });
  };

  const previousMovie = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return newIndex;
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
