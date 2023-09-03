/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CityInput from "./CityInput";
import CityProposal from "./CityProposal";

function Home() {
  const [citySearch, setCitySearch] = useState<string>("");

  return (
    <>
      <h1 className="font-bold">Weathersearcher</h1>
      <section>
        <h3>Get the current weather for your city</h3>
        <CityInput currentSearch={citySearch} updateSearch={setCitySearch} />
        {citySearch && <CityProposal city={citySearch} />}
      </section>
    </>
  );
}

export default Home;
