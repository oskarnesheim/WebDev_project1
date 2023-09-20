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
  const { isLoading, isError, data, error } = useQuery<ICity[], Error>({
    queryKey: [city + "proposal"],
    queryFn: () => getSearch(city),
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError && error.message === '[""] data is undefined') {
    return <div>Error</div>;
  }

  return (
    <div className="city-container">
      {data &&
        data.map((cityProposal) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              setCity("");
              navigate(cityProposal.name + "/forecast");
            }}
            className="city-item"
            key={cityProposal.id}
          >
            <ul>
              <li>{cityProposal.name}</li>
              <li className="city-info">{cityProposal.region}</li>
              <li className="city-info">{cityProposal.country}</li>
            </ul>
            {/* {cityProposal.name} - {cityProposal.region} - {cityProposal.country}{" "} */}
          </div>
        ))}
    </div>
  );
}

export default CityProposal;
// onClick={() => navigate(city.name)}
