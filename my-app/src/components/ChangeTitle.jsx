import { useState } from "react";

export const ChangeTitle = () => {
  const [title, setTitle] = useState("Starý text v titlu!");
  const [buttonText, setButtonText] = useState("Původní text tlačítka");

  const buttonHandler = () => {
    setTitle("Nový text v titlu!");
  };

  const button2Handler = () => {
    setTitle("XXXXXXXXXXXXXX");
  };

  const deleteAll = () => {
    setTitle("");
  };

  const buttonChange = () => {
    setButtonText("Nový text tlačítka");
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={buttonHandler}>Změnit title</button>
      <button onClick={button2Handler}>Opět změnit text v titlu</button>
      <button onClick={deleteAll}>Vymazat title</button>
      <button onClick={buttonChange}>{buttonText}</button>
    </>
  );
};
