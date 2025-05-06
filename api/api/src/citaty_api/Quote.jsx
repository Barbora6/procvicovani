import { useEffect, useState } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    setQuote(data["quote"]);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <h1>Citáty</h1>
      <h3>{quote}</h3>
      <button onClick={() => getQuote()}>Další citát</button>
    </div>
  );
};
