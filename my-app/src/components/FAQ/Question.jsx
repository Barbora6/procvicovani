import { useState } from "react";
import "./Question.css";

export const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section>
        <h2>{title}</h2>
        <button onClick={() => setShow(!show)}>Odpověď</button>
      </section>
      {show && <p>{info}</p>}
    </>
  );
};

// Vytvoříme komponentu Question, kde bude otázka (title) a odpověď (info).
//  Dále vytvoříme proměnnou show, která nám bude sloužit jako přepínač. Uložíme do ní false
//  a po každém kliknutí na tlačítko (button) se obsah show přemění na opačnou hodnotu.
//  Takže po prvním kliknutí na true. Po druhém kliknutí na false. Po třetím kliknutí na true a tak
//  stále dokola.
//  Poslední řádek v return zabezpečuje, že podle toho, jaké hodnoty nabývá show, tak se <p>
//  zobrazuje nebo ne.
