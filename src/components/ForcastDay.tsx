/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { forecastday } from "../../public/interfaces/IWeatherAPI";

type forcastDayProps = {
  day: forecastday;
};

export default function ForcastDay({ forecastDay }: forcastDayProps) {
  return <div></div>;
}
