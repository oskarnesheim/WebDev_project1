/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import getCurrent from "../functions/GetCurrent";
import { ICurrentWeatherData } from "../../public/interfaces/IWeatherAPI";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  favoriteCities,
  globalAdvancedState,
  measuringUnit,
} from "../recoil/atoms";

type cityProps = {
  city: string;
};

export default function CurrentWeather({ city }: cityProps) {
  const [showAdvanced, setShowAdvanced] = useRecoilState(globalAdvancedState);
  const [metric, setMetric] = useRecoilState(measuringUnit);

  const [favoriteCitiesList, setFavoriteCitiesList] =
    useRecoilState(favoriteCities);
  const [starSymbol, setStarSymbol] = useState(getCityStatus(city!));

  function getCityStatus(cityName: string) {
    return !favoriteCitiesList.includes(cityName) ? "★" : "☆";
  }

  function toggleFavorite() {
    const favorites: string[] = [...favoriteCitiesList];
    if (!favorites.includes(city!)) {
      favorites.push(city!);
    } else {
      favorites.splice(favorites.indexOf(city!), 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteCitiesList(favorites);
    setStarSymbol(getCityStatus(city!));
  }

  const { isLoading, isError, data, error } = useQuery<
    ICurrentWeatherData,
    Error
  >({
    queryKey: [city + "current"],
    queryFn: () => getCurrent(city!),
  });
  if (isLoading) {
    return <div>Loading... ...</div>;
  }
  if (isError) {
    return <div>We found this error... {error.message}</div>;
  }

  function toggleAdvanced() {
    setShowAdvanced(!showAdvanced);
    if (showAdvanced) {
      localStorage.setItem("showAdvanced", JSON.stringify(false));
    } else {
      localStorage.setItem("showAdvanced", JSON.stringify(true));
    }
  }

  return (
    <div className="current-weather-container">
      <div>
        <span className="location">
          <h1 className="location-header">
            {data.location.name} -
            <button onClick={() => toggleFavorite()}>{starSymbol}</button>
          </h1>
          <p className="location-region">
            {data.location.region}/{data.location.country}
          </p>
        </span>
        <div className="temperature">
          {metric ? data.current.temp_c + "C" : data.current.temp_f + "F"}
          <img 
            className="weather-icon"
            src={data.current.condition.icon}
            alt=""
          />
        </div>
        <button onClick={() => toggleAdvanced()}>
          {showAdvanced ? "Hide Andvanced" : "Show Andvanced"}
        </button>
      </div>
      {showAdvanced && (
        <div  className="advanced-info">
          <div  className="weather-info-item">
            Direction: {data.current.wind_dir} -{" "}
            {metric
              ? (data.current.wind_kph / 3.6).toPrecision(2) + " Kph"
              : (data.current.wind_mph / 3.6).toPrecision(2) + " Mph"}
          </div>
          <div  className="weather-info-item">
            Humidity: {data.current.humidity}%
            <br />
            Cloud: {data.current.cloud}%
            <br />
            Feels like:
            {metric
              ? data.current.feelslike_c + "C"
              : data.current.feelslike_f + "F"}
            <br />
            UV: {data.current.uv}
          </div>
        </div>
      )}
    </div>
  );
}
