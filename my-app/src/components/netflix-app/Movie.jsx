import { useState } from "react";
import dataNetflix from "../../data/dataNetflix";
import "./Movie.css";
import { MovieDeleteButton } from "./MovieDeleteButton";
import { AllDeleteButton } from "./AllDeleteButton";

export const Movie = () => {
  const [movieList, setMovieList] = useState(dataNetflix);

  const deleteMovieHandler = (idecko) => {
    const filteredMovie = movieList.filter((movie) => {
      return movie.id !== idecko;
    });

    setMovieList(filteredMovie);
  };

  const deleteAllMovies = () => {
    setMovieList([]);
  };

  return (
    <div className="all-movies">
      {movieList.map((oneMovie) => {
        const { id, image, title, age, tags, description } = oneMovie;

        return (
          <div className="one-movie" key={id}>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <p>{age}</p>
            <p>{tags}</p>
            <p className="text">{description}</p>
            <MovieDeleteButton deleteMovie={() => deleteMovieHandler(id)} />
          </div>
        );
      })}
      <AllDeleteButton deleteAll={deleteAllMovies} />
    </div>
  );
};
