import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ICurrentWeatherData } from "../../../public/interfaces/IWeatherAPI";
import { getCurrent } from "../../functions/GetCurrent";
import { useRecoilState } from "recoil";
import { measuringUnit } from "../../recoil/atoms";
import "./Home.css";

type FavoritePreviewProps = {
  city: string;
};

/**
 * FavoritePreview component that take in a city and renders a preview of the city
 * @param city : string
 * @returns FavoritePreview component
 */
export default function FavoritePreview({ city }: FavoritePreviewProps) {
  const [metric] = useRecoilState(measuringUnit);
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery<
    ICurrentWeatherData,
    Error
  >({
    queryKey: [city + "_current"],
    queryFn: () => getCurrent(city!),
    staleTime: 1000 * 60 * 60, // decides how long the data is considered fresh
    cacheTime: 1000 * 60 * 60, // decides how long the data is kept in cache
  });

  if (isLoading) {
    return <div>Loading... ...</div>;
  }
  if (isError) {
    return <div>We found this error... {error.message}</div>;
  }

  return (
    <div
      className="city_preview"
      onClick={() =>
        navigate(
          city + "/forecast",
          // ${city.name}_${city.region}_${city.country}/forecast`
        )
      }
      key={data.location.name + "/preview"}
    >
      <span className="">
        <h1 className="">{data.location.name}</h1>
        <p className="">
          {data.location.region}/{data.location.country}
        </p>
      </span>
      <div>
        {metric ? data.current.temp_c + "C" : data.current.temp_f + "F"}
        <img src={data.current.condition.icon} alt="" />
      </div>
    </div>
  );
}
