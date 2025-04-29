import { data } from "../data";

export const FilterMap = () => {
  const vymazaneId = 3;

  const vyslednePole = data.filter((jedenUkol) => {
    return jedenUkol !== vymazaneId;
  });

  return (
    <ol>
      {vyslednePole.map((ukol) => {
        return <li key={ukol.id}>{ukol.name}</li>;
      })}
    </ol>
  );
};
