import { atom } from "recoil";

export const measuringUnit = atom({
  key: "measuringUnitIsMetric", // unique ID (with respect to other atoms/selectors)
  default: getMeasuringUnit() as boolean, // default value (aka initial value)
});

function getMeasuringUnit() {
  const metric: boolean = JSON.parse(localStorage.getItem("metric")!);
  if (metric === null) {
    localStorage.setItem("metric", JSON.stringify(true));
    return true;
  }
  return metric;
}

export const favoriteCities = atom({
  key: "favoriteCities", // unique ID (with respect to other atoms/selectors)
  default: getFavorites() as string[], // default value (aka initial value)
});

function getFavorites() {
    let favorites: string[] = [];
    if (localStorage.getItem("favorites")) {
      favorites = JSON.parse(localStorage.getItem("favorites")!);
    }
    return favorites;
  }
