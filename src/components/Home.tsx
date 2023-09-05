/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CityInput from "./CityInput";
import CityProposal from "./CityProposal";
import { Outlet } from "react-router-dom";

function Home() {
  const [citySearch, setCitySearch] = useState<string>("");

  return (
    <div className="mx-[30%] mt-10">
      <h1 className="font-bold text-3xl">Weathersearcher</h1>
      <section>
        <h3>Get the current weather for your city</h3>
        <CityInput currentSearch={citySearch} updateSearch={setCitySearch} />
        {citySearch && <CityProposal city={citySearch} />}
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
