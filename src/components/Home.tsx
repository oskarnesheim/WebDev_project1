/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CityInput from "./CityInput";
import CityProposal from "./CityProposal";
import { Outlet } from "react-router-dom";
import FavoritePreview from "./FavoritePreview";
import { useRecoilState } from "recoil";
import { favoriteCities } from "../recoil/atoms";
import "./Home.css";

function Home() {
  const [citySearch, setCitySearch] = useState<string>("");
  const [favoriteCitiesList, setFavoriteCitiesList] =
    useRecoilState(favoriteCities);

  return (
    <div className="home-container">
      <section className="home-section">
        <div className="favorites_preview">
          {favoriteCitiesList.map((city) => {
            return <FavoritePreview city={city} />;
          })}
        </div>
        <CityInput currentSearch={citySearch} updateSearch={setCitySearch} />
        {citySearch && (
          <CityProposal setCity={setCitySearch} city={citySearch} />
        )}
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
