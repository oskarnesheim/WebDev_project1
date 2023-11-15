import { useQuery } from "@tanstack/react-query";
import getSearch from "../../../functions/GetSearch";
import ICity from "../../../../public/interfaces/CitySearch";
import { useNavigate } from "react-router-dom";
import "./CityProposal.css";

type CityProposalProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

function CityProposal({ city, setCity }: CityProposalProps) {
  const navigate = useNavigate();
  const { isError, data, error } = useQuery<ICity[], Error>({
    queryKey: [city + "_proposal"],
    queryFn: () => getSearch(city),
    staleTime: 1000 * 60 * 60, // decides how long the data is considered fresh
    cacheTime: 1000 * 60 * 60, // decides how long the data is kept in cache
  });

  //   if (isLoading) {
  //     return <div>Loading</div>;
  //   }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="city-container">
      {data &&
        data.map((cityProposal) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              setCity("");
              navigate(`${cityProposal.url}-${cityProposal.id}/forecast`);
            }}
            className="city-item"
            key={cityProposal.id}
          >
            <ul>
              <li>{cityProposal.name}</li>
              <li className="city-info">{cityProposal.region}</li>
              <li className="city-info">{cityProposal.country}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default CityProposal;
