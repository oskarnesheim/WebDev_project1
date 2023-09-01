import { useState } from "react";
import CityInput from "./CityInput";
import ForecastForCity from "./ForecastForCity";

function Home() {
  const [cities, setCityNames] = useState<string[]>([]);

  return (
    <>
      <h1 className="font-bold">Weathersearcher</h1>
      <CityInput cities={cities} addCity={setCityNames} />
      <div>
        {cities.map((city) => (
          <ForecastForCity key={city} city={city} />
        ))}
      </div>
    </>
  );
}

export default Home;
