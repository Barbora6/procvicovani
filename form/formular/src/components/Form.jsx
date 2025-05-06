import { useState } from "react";
import "./Form.css";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [names, setNames] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();

    if (firstName) {
      setNames((names) => {
        // spread operator - vezme vše co je v names a přidá tam to co je ve firstName
        return [...names, firstName];
      });
    } else {
      console.log("Nebylo nic vyplněno.");
    }
    setFirstName("");
  };

  return (
    <article>
      <form>
        <h2>Formulář</h2>
        <div>
          <input
            className="userName"
            type="text"
            id="userName"
            placeholder="Jméno"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <input onClick={formSubmit} type="submit" />
      </form>
      <ol>
        {names.map((oneName, index) => {
          return <li key={index}>{oneName}</li>;
        })}
      </ol>
    </article>
  );
};
