/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */

function City() {
  const city: string = useLoaderData() as string;

  const [favorite, setFavorite] = useState(getCityStatus(city));

  function getCityStatus(cityName: string) {
    const favorites: string[] = getFavorites();
    console.log(favorites);

    if (favorites.includes(cityName)) {
      return "★";
    }
    return "☆";
  }

  function getFavorites() {
    let favorites: string[] = [];
    if (localStorage.getItem("favorites")) {
      favorites = JSON.parse(localStorage.getItem("favorites")!);
    }
    return favorites;
  }

  function toggleFavorite() {
    const favorites: string[] = getFavorites();
    if (favorites.includes(city)) {
      favorites.splice(favorites.indexOf(city), 1);
    } else {
      favorites.push(city);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return setFavorite(getCityStatus(city));
  }

  return (
    <div>
      <h2>
        Welcome to {city}
        {favorite}
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to={`current`}>Current</NavLink>
          </li>
          <li>
            <NavLink to={`forecast`}>Forecast</NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={toggleFavorite}>Toggle favorite</button>
      <Outlet />
    </div>
  );
}

export default City;
