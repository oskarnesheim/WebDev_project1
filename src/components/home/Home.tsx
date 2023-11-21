import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import FavoritePreview from "./FavoritePreview";
import { useRecoilState } from "recoil";
import "./Home.css";
import { favoriteCities, globalSortingState } from "../../recoil/atoms";
import CityProposal from "./city_proposal/CityProposal";
import CityInput from "./city_input/CityInput";

function Home() {
  const [citySearch, setCitySearch] = useState<string>("");
  const [citySearchDelayed, setCitySearchDelayed] = useState<string>("");
  const [favoriteCitiesList] = useRecoilState(favoriteCities);
  const [sortedFavoriteCitiesList, setSortedFavoriteCitiesList] = useState<
    string[]
  >([]);
  const [sorting, setSorting] = useRecoilState(globalSortingState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCitySearchDelayed(citySearch);
    }, 500);
    return () => clearTimeout(timer);
  }, [citySearch]);

  const getSortedFavoriteCitiesList = useCallback((): string[] => {
    return [...favoriteCitiesList].sort((a, b) => a.localeCompare(b));
  }, [favoriteCitiesList]);

  useEffect(() => {
    setSortedFavoriteCitiesList(getSortedFavoriteCitiesList());
  }, [favoriteCitiesList, getSortedFavoriteCitiesList]);

  function getCityList() {
    return (
      <div className="favorites_preview_grid">
        {sorting &&
          sortedFavoriteCitiesList.map((city) => {
            return (
              <FavoritePreview key={city + "_favorite_preview"} city={city} />
            );
          })}
        {!sorting &&
          favoriteCitiesList.map((city) => {
            return (
              <FavoritePreview key={city + "_favorite_preview"} city={city} />
            );
          })}
      </div>
    );
  }

  function saveSorting(s: boolean) {
    sessionStorage.setItem("sorting", JSON.stringify(s));
    setSorting(s);
  }

  return (
    <div className="home-container">
      <section className="home-section">
        <button className="sorting_btn" onClick={() => saveSorting(!sorting)}>
          {sorting ? "Sort by name (A-Z)" : "Sort by time added (old-new)"}
        </button>
        <div className="favorites_preview">
          {favoriteCitiesList.length !== 0 ? (
            getCityList()
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
