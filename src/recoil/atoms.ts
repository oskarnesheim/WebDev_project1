import { atom } from "recoil";


export const measuringUnit = atom({
  key: 'measuringUnitIsMetric', // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});



