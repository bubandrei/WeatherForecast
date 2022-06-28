import { useState } from "react";
import Weather from "./component/Weather";

const places = [
  { id: "1", city: "Minsk", zip: "111" },
  { id: "2", city: "Warszawa", zip: "222" },
  { id: "3", city: "Krakow", zip: "33" },
  { id: "4", city: "Wroclaw", zip: "44" },
  { id: "5", city: "Lodz", zip: "55" }
];

export default function App() {
  const [activePlace, setActivePlace] = useState("Minsk");

  const eachCity = places.map((item, index) => {
    return (
      <button
        key={index}
        onClick={() => {
          setActivePlace(item.city);
        }}
      >
        {item.city}
      </button>
    );
  });
  return (
    <div className="App">
      <Weather city={activePlace} key={activePlace} />
      {eachCity}
    </div>
  );
}