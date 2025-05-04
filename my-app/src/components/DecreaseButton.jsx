// tlačítko na snížit o 1

export const DecreaseButton = ({ decrease }) => {
  return (
    <button className="btn" onClick={decrease}>
      Snížit o 1
    </button>
  );
};
