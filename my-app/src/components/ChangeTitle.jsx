import { useState } from "react";

export const ChangeTitle = () => {
  const [title, setTitle] = useState("Starý text v titlu!");

  const buttonHandler = () => {
    setTitle("Nový text v titlu!");
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={buttonHandler}>Změnit title</button>
    </>
  );
};
