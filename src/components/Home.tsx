/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CityInput from "./CityInput";
import CurrentWeather from "./CurrentWeather";
import { Outlet } from "react-router-dom";

function Home() {
  const [cities, setCityNames] = useState<string[]>([]);
  const [foreCastForCity, setForeCastForCity] = useState<string[]>([]);

  return (
    <>
      <h1 className="font-bold">Weathersearcher</h1>
      <section>
        <h3>Get the current weather for your city</h3>
        <CityInput cities={cities} addCity={setCityNames} />
        <div>
          {cities.map((city) => (
            <CurrentWeather key={city} city={city} />
          ))}
        </div>
      </section>
      {/* <section>
        <h3>Get the weather forecast for your city</h3>
        <CityInput cities={foreCastForCity} addCity={setForeCastForCity} />
      </section> */}

      <Outlet />
    </>
  );
}

export default Home;
