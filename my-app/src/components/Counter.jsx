import { useState } from "react";
import { DecreaseButton } from "./DecreaseButton";
import { Increase } from "./Increase";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const decreaseOne = () => {
    const result = value - 1;
    setValue(result);
  };

  const increaseOne = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  return (
    <div>
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <DecreaseButton decrease={decreaseOne} />
      <Increase increase={increaseOne} />
    </div>
  );
};
