/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

type CityInputProps = {
  addCity: React.Dispatch<React.SetStateAction<string[]>>;
  cities: string[];
};

function CityInput({ addCity, cities }: CityInputProps) {
  const [cityName, setCityName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!cities.includes(cityName)) {
      addCity((prev) => [...prev, cityName]);
    }
    setCityName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cityName">Enter City Name:</label>
      <input
        type="text"
        id="cityName"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
        placeholder="E.g., New York"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CityInput;
