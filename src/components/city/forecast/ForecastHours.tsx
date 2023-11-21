import { hour } from "../../../../public/interfaces/IWeatherAPI";
import { measuringUnit } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import "./Forecast.css";

type forecastHourProps = {
  hour: hour;
  preview: boolean;
  count: number;
};

/**
 * ForecastHours component
 * @param hour : hour
 * @param preview : boolean
 * @param count : number
 * @returns ForecastHours component
 */
export default function ForecastHours({
  hour,
  preview,
  count,
}: forecastHourProps): JSX.Element {
  const [metric] = useRecoilState(measuringUnit);
  const classname = preview ? "ForecastHours_preview" : "forecastHour";

  if (preview && count++ % 6 !== 0) {
    return <></>;
  } else {
    return (
      <>
        <div className={classname} key={hour.time_epoch + count}>
          <div className="blabla">
            <span className="time">{hour.time.slice(-5)}</span>
            <span className="temperature">
              {metric ? hour.temp_c + "C" : hour.temp_f + "F"}
              {!preview && (
                <span className="additional-info">
                  UV {hour.uv} | {hour.wind_dir} |{" "}
                  {(hour.wind_kph * 0.2778).toPrecision(2)} m/s
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
      </>
    );
  }
}
