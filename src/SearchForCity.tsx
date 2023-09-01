import { useState } from "react";
import CityInput from "./CityInput";
import QueryTest from "./ForecastForCity";

function SearchForCity() {
  const [cityName, setCityName] = useState<string[]>([]);

  return (
    <>
      <h1 className="font-bold">Hello World</h1>
      <CityInput addCity={setCityName} />
      <div>
        {cityName.map((city) => (
          <QueryTest key={city} city={city} />
        ))}
      </div>
    </>
  );
}

export default SearchForCity;
