import { useState } from "react";
import "./Form.css";

// Spread operator
// Spojování polí
// const studentsGroup = ["David", "Jana", "Martina"];
// const allStudents = ["Harry", "Ron", ...studentsGroup, "Hermiona"];
// console.log(allStudents);

// argumenty funkcí
const numbers = [1, 2, 3];

const multipleNumbers = (a, b, c) => {
  console.log(a * b * c);
};

multipleNumbers(...numbers);

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
      {names.map((oneName, index) => {
        return (
          <p key={index} className="item">
            {oneName}
          </p>
        );
      })}
    </article>
  );
};
