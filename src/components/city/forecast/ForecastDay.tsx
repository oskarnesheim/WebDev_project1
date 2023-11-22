import { forecastday, hour } from "../../../../public/interfaces/IWeatherAPI";
import ForecastHours from "./ForecastHours";
import { useState } from "react";
import "../City.css";
import "./Forecast.css";

type forecastDayProps = {
  day: forecastday;
};

/**
 * ForecastDay component
 * @param day : forecastday
 * @returns ForecastDay component
 */
export default function ForceastDay({ day }: forecastDayProps) {
  const [showHours, setShowHours] = useState<boolean>(false);
  let count = 0;

  function getDisplay(showPreview: boolean) {
    return !showPreview ? "flex" : "none";
  }

  /**
   * Function that takes in a date and returns the day of the week
   * @param day : string
   * @returns  day of the week
   */
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
          {day.hour.map((h: hour) => {
            return (
              <ForecastHours
                key={day.date_epoch + count}
                hour={h}
                preview={true}
                count={count++}
              />
            );
          })}
        </div>
      </div>
      {showHours && (
        <div className="ForecastHours">
          {day.hour.map((h: hour) => {
            return (
              <ForecastHours
                key={day.date_epoch + count++}
                hour={h}
                preview={false}
                count={0}
              />
            );
          })}
        </div>
      )}
      <button
        className="show_hours_btn"
        onClick={() => setShowHours(!showHours)}
      >
        {showHours ? "Hide hours ⬆" : "Show hours ⬇"}
      </button>
    </div>
  );
}
