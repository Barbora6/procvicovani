import { useState } from "react";
import { categories } from "../../data/categories.js";
import dataNetflix from "../../data/dataNetflix.js";
import "./ClickingMovies.css";

export const ClickingMovies = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("komedie");

  const filteredMovies = dataNetflix.filter((oneMovie) => {
    return oneMovie["category"] === typeOfMovie;
  });

  return (
    <>
      <div className="all-buttons">
        {categories.map((oneCategory, index) => {
          return (
            <button
              className="one-button"
              key={index}
              onClick={() => setTypeOfMovie(oneCategory)}
            >
              {oneCategory}
            </button>
          );
        })}
      </div>
      <div className="all-movies">
        {filteredMovies.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;

          return (
            <div className="one-movie" key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
