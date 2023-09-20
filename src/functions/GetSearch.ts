import axios from "axios";
import ICity from "../../public/interfaces/CitySearch";

async function getData(API_request:string): Promise<ICity[]> {
    return await axios
      .get(API_request)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  function getSearch(city: string) {
    const WEATHER_REQUEST =
    "http://api.weatherapi.com/v1/search.json?key=1413dd12c034448e8e894125230109&q="+city;

    return getData(WEATHER_REQUEST);
  }

  export default getSearch;