import axios from "axios";
import { BASE_URL_CURRENT } from "../components/assets/APIUrl";

/**
 * Get current weather data
 * @param city
 * @returns
 */
export async function getCurrent(city: string) {
  const AIR_QUALITY = "no";
  const WEATHER_REQUEST = BASE_URL_CURRENT + `&q=${city}}&aqi=${AIR_QUALITY}`;

  return await axios
    .get(WEATHER_REQUEST)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
