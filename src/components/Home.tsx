/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CityInput from "./CityInput";
import CityProposal from "./CityProposal";
import { Outlet } from "react-router-dom";
import FavoriteCityList from "./FavoriteCityList";
import { useRecoilState } from "recoil";
import { favoriteCities } from "../recoil/atoms";

function Home() {
  const [citySearch, setCitySearch] = useState<string>("");
  const [favoriteCitiesList, setFavoriteCitiesList] =
    useRecoilState(favoriteCities);

  return (
    <div className="">
      <h1 className="">Weathersearcher</h1>
      <section>
        <h3>Get the current weather for your city</h3>
        <CityInput currentSearch={citySearch} updateSearch={setCitySearch} />
        {citySearch && <CityProposal city={citySearch} />}
        <FavoriteCityList cities={favoriteCitiesList} />
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
