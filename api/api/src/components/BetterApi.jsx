import { useEffect, useState } from "react";

export const BetterApi = () => {
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((data) => data["iss_position"])
      .then((position) => {
        setLatitude(position["latitude"]);
        setLongitude(position["longitude"]);
      });
    // jakmile získáme data a vypíšou se do stránky, změní se loading na false a text načítání se přemění na latitude a longitude
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Načítání stránky...</h2>;
  }

  return (
    <>
      <h2>Zeměpisná šířka</h2>
      <p>{latitude}</p>
      <h2>Zeměpisná délka</h2>
      <p>{longitude}</p>
    </>
  );
};
