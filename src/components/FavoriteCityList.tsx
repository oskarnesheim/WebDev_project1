import { NavLink } from "react-router-dom";

type FavoriteCityListProps = {
  cities: string[];
};

export default function FavoriteCityList({ cities }: FavoriteCityListProps) {
  return (
    <div>
      <h3>Favorite cities</h3>
      <nav>
        {cities.map((city) => {
          return (
            <NavLink key={city} to={city + "/current"}>
              {city}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
