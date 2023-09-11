/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { favoriteCities } from "../recoil/atoms";
import FavoritePreview from "../components/FavoritePreview";

/* eslint-disable @typescript-eslint/no-unused-vars */

function City() {
  const { city } = useParams();
  const [favoriteCitiesList, setFavoriteCitiesList] =
    useRecoilState(favoriteCities);
  const [starSymbol, setStarSymbol] = useState(getCityStatus(city!));

  function getCityStatus(cityName: string) {
    return !favoriteCitiesList.includes(cityName) ? "★" : "☆";
  }

  function toggleFavorite() {
    const favorites: string[] = [...favoriteCitiesList];
    if (!favorites.includes(city!)) {
      favorites.push(city!);
    } else {
      favorites.splice(favorites.indexOf(city!), 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteCitiesList(favorites);
    setStarSymbol(getCityStatus(city!));
  }

  return (
    <div>
      <h2>
        <div onClick={() => toggleFavorite()}>{starSymbol}</div>
      </h2>
      <FavoritePreview cities={city!} />
      <Outlet />
    </div>
  );
}

export default City;
