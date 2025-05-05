import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import dataNetflix from "../../data/dataNetflix";
import "./OneMovieSlider.css";

export const OneMovieSlider = () => {
  const [index, setIndex] = useState(0);

  //   Naimportujeme useState a useEffect a také data. Nastavíme proměnnou index na 0 a protože ji budeme muset měnit, tak to uděláme pomocí useState.  Poté do stránky vypíšeme všechny filmy.

  //   Filmy se ve slideru točí stále dokola
  useEffect(() => {
    const lastIndex = dataNetflix.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <section className="all-movies">
      <div className="all-movies-content">
        {dataNetflix.map((oneMovie, oneMovieIndex) => {
          // Map dokáže generovat indexy prvků v poli. My si je uložíme do oneMovieIndex. Nyní začneme přiřazovat classy.Všechny filmy nejdříve dostanou next-slide.
          const { id, image, title, age, tags, description } = oneMovie;

          let mainClass = "next-slide";

          if (oneMovieIndex === index) {
            mainClass = "active-slide";
          }

          if (
            oneMovieIndex === index - 1 ||
            (index === 0 && oneMovieIndex === dataNetflix.length - 1)
          ) {
            mainClass = "last-slide";
          }

          return (
            <article key={id} className={mainClass}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{tags}</p>
              <p>{age}</p>
            </article>
          );
        })}
      </div>
      <div>
        <button onClick={() => setIndex(index - 1)}>
          <FaArrowAltCircleLeft />
        </button>
        <button onClick={() => setIndex(index + 1)}>
          <FaArrowAltCircleRight />
        </button>
      </div>
    </section>
  );
};
