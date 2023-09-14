/* eslint-disable @typescript-eslint/no-unused-vars */
import { forecastday } from "../../public/interfaces/IWeatherAPI";
import ForecastHours from "./ForecastHours";
import { useState } from "react";
import "./City.css";
import "./Forecast.css";

type forcastDayProps = {
  day: forecastday;
};

export default function ForceastDay({ day }: forcastDayProps) {
  const [showHours, setShowHours] = useState<boolean>(false);
  const [display, setDisplay] = useState<string>(getDisplay(showHours));

  function getDisplay(showPreview: boolean) {
    return !showPreview ? "flex" : "none";
  }

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
    <div className="ForecastDay" key={day.date_epoch}>
      <div
        onClick={() => setShowHours(!showHours)}
        className="ForecastDay_preview"
      >
        {getDayOfWeek(day.date)} {day.date.slice(5)}
        <div
          className="ForecastHours_preview"
          style={{
            display: getDisplay(showHours),
          }}
        >
          <ForecastHours key={day.date_epoch} hours={day.hour} preview={true} />
        </div>
      </div>

      {showHours && (
        <ForecastHours key={day.date_epoch} hours={day.hour} preview={false} />
      )}
    </div>
  );
}
