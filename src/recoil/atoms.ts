import { atom } from "recoil";

export const measuringUnit = atom({
  key: "measuringUnitIsMetric", // unique ID (with respect to other atoms/selectors)
  default: getMeasuringUnit() as boolean, // default value (aka initial value)
});

function getMeasuringUnit() {
  const metric: boolean = JSON.parse(sessionStorage.getItem("metric")!);
  if (metric === null) {
    sessionStorage.setItem("metric", JSON.stringify(true));
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

export const globalAdvancedState = atom({
  key: "globalAdvancedState", // unique ID (with respect to other atoms/selectors)
  default: getAdvanced() as boolean, // default value (aka initial value)
});

function getAdvanced() {
  let showAdvanced: boolean = false;
  if (localStorage.getItem("showAdvanced")) {
    showAdvanced = JSON.parse(localStorage.getItem("showAdvanced")!);
  }
  return showAdvanced;
}
