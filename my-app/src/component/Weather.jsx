import { useEffect, useState } from "react";

const Weather = ({ city }) =>
{
  const [ current, setCurrent ] = useState(null);
  useEffect(() =>
  {
    const url =
      // "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=672cb8d270d19ebf2dbdf49d3b1234a5";
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [ city ]);
  console.log(current)
  return (
    <>
      <h1>{ city }</h1>
      <div>{ current }</div>
      <div>{current.weather[0].main}</div>
      <div>{current.wind.speed}</div>
    </>
  )
};
export default Weather;
