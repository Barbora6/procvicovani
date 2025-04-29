import { useState } from "react";
import { data } from "../data";
import "./AllTask.css";

export const AllTask = () => {
  const [task, setTask] = useState(data);

  const handleClickButton = (idecko) => {
    const filterTask = task.filter((oneTask) => {
      return oneTask.id !== idecko;
    });

    setTask(filterTask);
  };

  const allDeleteHandle = () => {
    return setTask([]);
  };

  return (
    <>
      {task.map((oneTask) => {
        // Destructuring (česky rozkládání) je v JavaScriptu způsob, jak rychle "rozbalit" hodnoty z objektu nebo pole do samostatných proměnných.
        const { id, name } = oneTask;
        return (
          <div className="one-task" key={id}>
            <h3>{name}</h3>
            <button onClick={() => handleClickButton(id)}>Vymazat</button>
          </div>
        );
      })}
      <button className="main-button" onClick={allDeleteHandle}>
        Vymazat vše
      </button>
    </>
  );
};
