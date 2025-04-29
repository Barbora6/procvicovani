import dataNetflix from "../data/dataNetflix";
import "./Movie.css";

export const Movie = () => {
  return (
    <div className="all-movies">
      {dataNetflix.map((oneMovie) => {
        const { id, image, title, age, tags, description } = oneMovie;

        return (
          <div className="one-movie" key={id}>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <p>{age}</p>
            <p>{tags}</p>
            <p className="text">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
