import { useRecoilState } from "recoil";
import "./Forecast.css";
import { hour } from "../../../../public/interfaces/IWeatherAPI";
import { measuringUnit } from "../../../recoil/atoms";

type forecastHourProps = {
  hours: hour[];
  preview: boolean;
};

export default function ForecastHours({ hours, preview }: forecastHourProps) {
  const [metric] = useRecoilState(measuringUnit);
  const classname = preview ? "ForecastHours_preview" : "forecastHour";
  let count = 0;

  return hours.map((hour) => {
    if (preview && count++ % 6 !== 0) return null;

    return (
      <div className={classname} key={hour.time_epoch}>
        <div className="blabla">
          <span className="time">{hour.time.slice(-5)}</span>
          <span className="temperature">
            {metric ? hour.temp_c + "C" : hour.temp_f + "F"}
            {!preview && (
              <span className="additional-info">
                UV {hour.uv} | {hour.wind_dir} |{" "}
                {(hour.wind_kph / 3.6).toPrecision(2)} M/s
              </span>
            )}
          </span>
        </div>
        <img
          className="condition-icon"
          src={hour.condition.icon}
          alt={hour.condition.text}
        />
      </div>
    );
  });
}
