import axios from "axios";
import ICurrentWeatherData from "../../public/interfaces/IWeatherAPI";

/* eslint-disable @typescript-eslint/no-unused-vars */


async function getData(API_request:string): Promise<ICurrentWeatherData> {
    return await axios
      .get(API_request)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  function getCurrent(city: string) {
    console.log(city)
    const WEATHER_REQUEST =
    "http://api.weatherapi.com/v1/current.json?key=1413dd12c034448e8e894125230109&q=" +
    city +
    "&aqi=no";

    return getData(WEATHER_REQUEST);
  }
  export default getCurrent;