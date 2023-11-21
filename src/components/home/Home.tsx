import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import FavoritePreview from "./FavoritePreview";
import { useRecoilState } from "recoil";
import "./Home.css";
import { favoriteCities, globalSortingState } from "../../recoil/atoms";
import CityProposal from "./city_proposal/CityProposal";
import CityInput from "./city_input/CityInput";

/**
 * Home component that renders the favorites, the cityinput and the results from the cityinput
 * @returns Home component
 */
function Home() {
  const [citySearch, setCitySearch] = useState<string>("");
  const [citySearchDelayed, setCitySearchDelayed] = useState<string>("");
  const [favoriteCitiesList] = useRecoilState(favoriteCities);
  const [sortedFavoriteCitiesList, setSortedFavoriteCitiesList] = useState<
    string[]
  >([]);
  const [sorting, setSorting] = useRecoilState(globalSortingState);

  /**
   * useEffect that sets the citySearchDelayed after 500ms
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setCitySearchDelayed(citySearch);
    }, 500);
    return () => clearTimeout(timer);
  }, [citySearch]);

  const getSortedFavoriteCitiesList = useCallback((): string[] => {
    return [...favoriteCitiesList].sort((a, b) => a.localeCompare(b));
  }, [favoriteCitiesList]);


  /**
   * useEffect that sets the sortedFavoriteCitiesList when the favoriteCitiesList changes
   */
  useEffect(() => {
    setSortedFavoriteCitiesList(getSortedFavoriteCitiesList());
  }, [favoriteCitiesList, getSortedFavoriteCitiesList]);

  /**
   * Function that returns the list of cities, sorted or not depending on the sorting state
   * @returns the list of cities
   */
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

  /**
   * Function that saves the sorting state to the sessionStorage and sets the sorting state
   * @param s : boolean
   */
  function saveSorting(s: boolean) {
    sessionStorage.setItem("sorting", JSON.stringify(s));
    setSorting(s);
  }

  return (
    <div className="home-container">
      <section className="home-section">
        <button
          className="sorting_btn"
          onClick={() => saveSorting(!sorting)}
          style={{
            display: favoriteCitiesList.length !== 0 ? "" : "none",
          }}
        >
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
