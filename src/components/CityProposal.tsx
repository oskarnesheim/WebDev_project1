/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import getSearch from "../functions/GetSearch";
import ICity from "../../public/interfaces/CitySearch";

type CityProposalProps = {
  city: string;
};

function CityProposal({ city }: CityProposalProps) {
  const { isLoading, isError, data, error } = useQuery<ICity[], Error>({
    queryKey: [city],
    queryFn: () => getSearch(city),
  });

  if (isLoading) {
    return <div></div>;
  }

  if (isError && error.message === '[""] data is undefined') {
    return <div></div>;
  }

  return (
    <div>
      {data &&
        data.map((city) => (
          <div key={city.id}>
            {city.name} - {city.region} - {city.country}
          </div>
        ))}
    </div>
  );
}

export default CityProposal;
