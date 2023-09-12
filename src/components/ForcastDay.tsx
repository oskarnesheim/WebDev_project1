/* eslint-disable @typescript-eslint/no-unused-vars */
import { forecastday } from "../../public/interfaces/IWeatherAPI";
import ForecastHours from "./ForecastHours";
import { useState } from "react";
import "./City.css";
import WeatherChart from "./WeatherChart";

type forcastDayProps = {
  day: forecastday;
};

export default function ForcastDay({ day }: forcastDayProps) {
  const [showHours, setShowHours] = useState<boolean>(false);
  console.log(day);

  function getDayOfWeek(day: string) {
    const dayOfWeek = new Date(day).getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][dayOfWeek];
  }

  return (
    <div
      onClick={() => setShowHours(!showHours)}
      className="ForecastDay"
      key={day.date_epoch}
    >
      <div className="ForecastDay_preview">
        {getDayOfWeek(day.date)} {day.date.slice(5)}
        <ForecastHours key={day.date_epoch} hours={day.hour} preview={true} />
      </div>

      {showHours && <WeatherChart day={day} />}
    </div>
  );
}
