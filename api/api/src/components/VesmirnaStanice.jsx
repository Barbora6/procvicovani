import { useEffect, useState } from "react";

export const VesmirnaStanice = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [urlMap, setUrlMap] = useState("");

  const getCoordinates = async () => {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();
    setLatitude(data["iss_position"]["latitude"]);
    setLongitude(data["iss_position"]["longitude"]);
    const iss_lat = data["iss_position"]["latitude"];
    const iss_long = data["iss_position"]["longitude"];
    setUrlMap(`https://mapy.cz/turisticka?x=${iss_long}&y=${iss_lat}&z=15`);
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <div>
      <h1>Vesmírná stanice</h1>
      <h3>Zeměpisná délka</h3>
      <p>{latitude}</p>
      <hr />
      <h3>Zeměpisná délka</h3>
      <p>{longitude}</p>
      <a href={urlMap} target="_blank">
        Pozice ISS v mapách
      </a>
    </div>
  );
};

// target='_blank' = otevře odkaz na samostatných stránkách
