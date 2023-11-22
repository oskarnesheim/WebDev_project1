import axios from "axios";
import { BASE_URL_FORECAST } from "../components/assets/APIUrl";

/**
 * Get forecast weather data
 * @param city
 * @returns
 */
export async function getForecast(city: string) {
  const NUMBER_OF_DAYS = 10;
  const AIR_QUALITY = "no";
  const ALLERTS = "no";
  const WEATHER_REQUEST =
    BASE_URL_FORECAST +
    `&q=${city}&days=${NUMBER_OF_DAYS}&aqi=${AIR_QUALITY}&alerts=${ALLERTS}`;

  return await axios
    .get(WEATHER_REQUEST)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
