import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ICurrentWeatherData } from "../../../public/interfaces/IWeatherAPI";
import getCurrent from "../../functions/GetCurrent";
import { useRecoilState } from "recoil";
import { measuringUnit } from "../../recoil/atoms";
import "./Home.css";

type FavoritePreviewProps = {
  city: string;
};

export default function FavoritePreview({ city }: FavoritePreviewProps) {
  const [metric] = useRecoilState(measuringUnit);
  const navigate = useNavigate();

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

  return (
    <div
      className="city_preview"
      onClick={() => navigate(city + "/forecast")}
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
