/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import getForecast from "../functions/GetForecast";
import { useQuery } from "@tanstack/react-query";
import ICurrentWeatherData from "../../public/interfaces/IWeatherAPI";

type ForecastProps = {
  city: string;
  // numberOfDays: number;
  // airQuality: boolean;
  // allerts: boolean;
};

function Forecast({ city }: ForecastProps) {
  // const { city } = useParams();
  return (
    <div>
      <h2>This is the forcast for {city}</h2>
    </div>
  );
}

export default Forecast;
