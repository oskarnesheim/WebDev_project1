/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

type CityInputProps = {
  addCity: React.Dispatch<React.SetStateAction<string[]>>;
};

function CityInput({ addCity }: CityInputProps) {
  const [cityName, setCityName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addCity((prev) => [...prev, cityName]);
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
