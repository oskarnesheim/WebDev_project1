import { atom } from "recoil";

/**
 * measuringUnit: true = metric, false = imperial
 */
export const measuringUnit = atom({
  key: "measuringUnitIsMetric", // unique ID (with respect to other atoms/selectors)
  default: getMeasuringUnit() as boolean, // default value (aka initial value)
});

/**
 *  Get the measuring unit from the session storage
 * @returns the measuring unit from the session storage
 */
function getMeasuringUnit() {
  const metric: boolean = JSON.parse(sessionStorage.getItem("metric")!);
  if (metric === null) {
    sessionStorage.setItem("metric", JSON.stringify(true));
    return true;
  }
  return metric;
}

/**
 * favoriteCities: array of favorite cities
 */
export const favoriteCities = atom({
  key: "favoriteCities", // unique ID (with respect to other atoms/selectors)
  default: getFavorites() as string[], // default value (aka initial value)
});

/**
 *  Get the favorite cities from the local storage
 * @returns the favorite cities from the local storage
 */
function getFavorites() {
  let favorites: string[] = [];
  if (localStorage.getItem("favorites")) {
    favorites = JSON.parse(localStorage.getItem("favorites")!);
  }
  return favorites;
}

/**
 * atom: globalAdvancedState - true = show advanced, false = hide advanced
 */
export const globalAdvancedState = atom({
  key: "globalAdvancedState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

/**
 * atom: globalSortingState - true = sort by A-Z, false = sort by time added
 */
export const globalSortingState = atom({
  key: "globalSortingState", // unique ID (with respect to other atoms/selectors)
  default: getSorting() as boolean, // default value (aka initial value)
});

/**
 *  Get the sorting state from the session storage
 * @returns the sorting state from the session storage
 */
function getSorting() {
  let currSorting: boolean = false;
  if (sessionStorage.getItem("sorting")) {
    currSorting = JSON.parse(sessionStorage.getItem("sorting")!);
  }
  return currSorting;
}
