/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import CityInput from "./CityInput";
import QueryTest from "./ForecastForCity";

function App() {
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

export default App;
