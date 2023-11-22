import axios from "axios";
import ICity from "../../public/interfaces/CitySearch";
import { BASE_URL_SEARCH } from "../components/assets/APIUrl";
/**
 * Get search data
 * @param city
 * @returns
 */
export async function getSearch(city: string): Promise<ICity[]> {
  const WEATHER_REQUEST = BASE_URL_SEARCH + `&q=${city}`;

  return await axios
    .get(WEATHER_REQUEST)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
