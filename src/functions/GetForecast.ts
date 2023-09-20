import axios from "axios";
import { IWeatherForeCastData } from "../../public/interfaces/IWeatherAPI";

async function getData(API_request:string): Promise<IWeatherForeCastData> {
    return await axios
      .get(API_request)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  function getForecast(city: string) {
    const numberOfDays = 10;
    const airQuality = true;
    const allerts = true;
    const WEATHER_REQUEST =
    "http://api.weatherapi.com/v1/forecast.json?key=1413dd12c034448e8e894125230109&q="+city+"&days="+numberOfDays+"&aqi="+airQuality+"&alerts="+allerts;

    return getData(WEATHER_REQUEST);
  }

  export default getForecast;