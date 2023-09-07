import { useState } from "react";

function MyCities() {
  const [favorites] = useState<string[]>(getMyCities());

  function getMyCities() {
    const favorites: string[] = JSON.parse(
      localStorage.getItem("favorites") || ""
    );
    return favorites;
  }

  function showFavorites() {
    favorites.forEach((city) => console.log(city));
    return favorites.map((city) => <div>{city}</div>);
  }

  return (
    <>
      <div>My favorite cities: </div>
      <div>{showFavorites()}</div>
    </>
  );
}

export default MyCities;
