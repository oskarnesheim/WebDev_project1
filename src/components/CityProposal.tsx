/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import getSearch from "../functions/GetSearch";
import ICity from "../../public/interfaces/CitySearch";
import { NavLink } from "react-router-dom";

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
    return <div>Loading</div>;
  }

  return (
    <div className="rounded-2xl border-solid border-4 p-2 border-gray-800">
      {data &&
        data.map((cityProposal) => (
          <NavLink key={cityProposal.id} to={cityProposal.name}>
            {cityProposal.name} - {cityProposal.region} - {cityProposal.country}
          </NavLink>
        ))}
    </div>
  );
}

export default CityProposal;
// onClick={() => navigate(city.name)}
