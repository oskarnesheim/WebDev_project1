/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import getSearch from "../functions/GetSearch";
import ICity from "../../public/interfaces/CitySearch";
import { NavLink } from "react-router-dom";
import "./CityProposal.css";

type CityProposalProps = {
  city: string;
};

function CityProposal({ city }: CityProposalProps) {
  const { isLoading, isError, data, error } = useQuery<ICity[], Error>({
    queryKey: [city + "proposal"],
    queryFn: () => getSearch(city),
  });

  if (isLoading) {
    return <div></div>;
  }

  if (isError && error.message === '[""] data is undefined') {
    return <div>Loading</div>;
  }

  return (
    <div className="city-container">
      {data &&
        data.map((cityProposal) => (
          <div className="city-item" key={cityProposal.id}>
            <NavLink key={cityProposal.id} to={cityProposal.name}>
              {cityProposal.name} - {cityProposal.region} - {cityProposal.country}
            </NavLink>
          </div>
        ))}
    </div>
  );
}

export default CityProposal;
// onClick={() => navigate(city.name)}
