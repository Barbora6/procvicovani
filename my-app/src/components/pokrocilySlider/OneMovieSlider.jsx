// import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import dataNetflix from "../../data/dataNetflix";
import "./OneMovieSlider.css";

export const OneMovieSlider = () => {
  //   const [index, setIndex] = useState(0);

  //   Naimportujeme useState a useEffect a také data. Nastavíme proměnnou index na 0 a protože ji budeme muset měnit, tak to uděláme pomocí useState.  Poté do stránky vypíšeme všechny filmy.

  return (
    <section className="all-movies">
      <div className="all-movies-content">
        {dataNetflix.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;
          return (
            <article key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{tags}</p>
              <p>{age}</p>
            </article>
          );
        })}
      </div>

      <button>
        <FaArrowAltCircleLeft className="my-icon" />
      </button>
      <button>
        <FaArrowAltCircleRight className="my-icon" />
      </button>
    </section>
  );
};
