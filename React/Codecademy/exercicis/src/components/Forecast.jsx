import React, { useState } from "react";
import useWeather from "../lib/hooks/useWeather";

export default function Forecast() {  

  const { data, loading, error } = useWeather();
  const [notes, setNotes] = useState("");

  const handleChange = ({ target }) => setNotes(target.value);

  if (loading) return <p>Carregant pàgina...</p>;
  if (error) return <p>{error}</p>;

  const tempMeteo = data.main.temp.toFixed(1) || "";
  const imgMeteo = data.weather[0].icon || "";

  return (
    <div className="App">
      <h1>My Weather Planner</h1>
      <p>{tempMeteo} ॰C</p>
      <img
        src={`http://openweathermap.org/img/w/${imgMeteo}.png`}
        alt=""
        style={{ display: "block", margin: "auto" }}
      />
      <input type="text" value={notes} onChange={handleChange} />
    </div>
  );
}
