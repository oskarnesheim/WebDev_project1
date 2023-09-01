import getWeather from "../functions/GetWeather";
import { useQuery } from "@tanstack/react-query";

/* eslint-disable @typescript-eslint/no-unused-vars */
//! Denne siden funker dårlig
function City() {
  const city = location.pathname.slice(1);
  // * hvordan skal jeg få tak i city før useQuery kjøres?

  const { isLoading, isError, data } = useQuery({
    queryKey: [city],
    queryFn: () => getWeather(city),
  });
  if (isLoading) {
    return <div>Loading... ...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <div>{data.location.name}</div>
      <div>{data.location.country}</div>
      <div>{data.location.region}</div>
      <div>{data.current.humidity}</div>
    </div>
  );
}

export default City;
