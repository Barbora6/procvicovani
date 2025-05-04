import { useEffect, useState } from "react";
import { DecreaseButton } from "./DecreaseButton";
import { Increase } from "./Increase";
import { ResetButton } from "./ResetButton";

export const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const button = document.querySelector(".btn");

    if (value >= 1) {
      button.textContent = `Klik číslo ${value}`;
    } else {
      button.textContent = "Klikni";
    }
  });

  const decreaseOne = () => {
    const result = value - 1;
    setValue(result);
  };

  const increaseOne = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  const resetToZero = () => {
    setValue(0);
  };

  return (
    <div>
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <DecreaseButton decrease={decreaseOne} />
      <Increase increase={increaseOne} />
      <ResetButton reset={resetToZero} />
    </div>
  );
};
