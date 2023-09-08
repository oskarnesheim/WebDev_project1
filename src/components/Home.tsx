/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CityInput from "./CityInput";
import CityProposal from "./CityProposal";
import { Outlet } from "react-router-dom";
import FavoriteCityList from "./FavoriteCityList";
import { useRecoilState } from "recoil";
import { favoriteCities } from "../recoil/atoms";
import "./Home.css";

function Home() {
  const [citySearch, setCitySearch] = useState<string>("");
  const [favoriteCitiesList, setFavoriteCitiesList] =
    useRecoilState(favoriteCities);

  return (
    <div className="home-container">
      {/* <img className="home-background" src={image} alt="background" /> */}
      <h1 className="home-heading">WeatherSearcher</h1>
      <section className="home-section">
        <h3 className="home-subheading">Get the current weather for your city</h3>
        <CityInput currentSearch={citySearch} updateSearch={setCitySearch} />
        {citySearch && <CityProposal city={citySearch} />}
        <FavoriteCityList cities={favoriteCitiesList} />
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
