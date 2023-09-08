import { atom } from "recoil";

export const measuringUnit = atom({
  key: "measuringUnitIsMetric", // unique ID (with respect to other atoms/selectors)
  default: getMeasuringUnit(), // default value (aka initial value)
});

function getMeasuringUnit() {
  const metric: boolean = JSON.parse(localStorage.getItem("metric")!);
  if (metric === null) {
    localStorage.setItem("metric", JSON.stringify(true));
    return true;
  }
  return metric;
}
