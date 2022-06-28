import { useEffect, useState } from "react";

const Weather = ({ city }) => {
  const [current, setCurrent] = useState();
  useEffect(() => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=672cb8d270d19ebf2dbdf49d3b1234a5";
    fetch(url)
      .then((res) => res.json())
      .then((json) => setCurrent(json.main.temp));
  }, [city]);
  console.log(current);
  return <h1>{city} - {current}</h1>;
};
export default Weather;
