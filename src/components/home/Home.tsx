import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import FavoritePreview from "./FavoritePreview";
import { useRecoilState } from "recoil";
import "./Home.css";
import { favoriteCities } from "../../recoil/atoms";
import CityProposal from "./city_proposal/CityProposal";
import CityInput from "./city_input/CityInput";

function Home() {
  const [citySearch, setCitySearch] = useState<string>("");
  const [citySearchDelayed, setCitySearchDelayed] = useState<string>("");
  const [favoriteCitiesList] = useRecoilState(favoriteCities);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCitySearchDelayed(citySearch);
    }, 500);
    return () => clearTimeout(timer);
  }, [citySearch]);

  return (
    <div className="home-container">
      <section className="home-section">
        <div className="favorites_preview">
          {favoriteCitiesList.length !== 0 ? (
            favoriteCitiesList.map((city) => {
              return (
                <FavoritePreview key={city + "_favorite_preview"} city={city} />
              );
            })
          ) : (
            <div>
              <h3>No favorites yet</h3>
              <p>
                You can click on the star next to the cityname in order to add
                them to your favorites
              </p>
            </div>
          )}
        </div>
        <CityInput currentSearch={citySearch} updateSearch={setCitySearch} />
        {citySearchDelayed && (
          <CityProposal setCity={setCitySearch} city={citySearchDelayed} />
        )}
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
