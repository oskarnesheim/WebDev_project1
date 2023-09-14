/* eslint-disable @typescript-eslint/no-unused-vars */
import "./CityInput.css";

type CityInputProps = {
  updateSearch: React.Dispatch<React.SetStateAction<string>>;
  currentSearch: string;
};

function CityInput({ updateSearch, currentSearch }: CityInputProps) {
  return (
    <div className="input-container">
      <input
        type="text"
        id="cityName"
        value={currentSearch}
        onChange={(event) => updateSearch(event.target.value)}
        placeholder="E.g., New York"
        required
      />
    </div>
  );
}

export default CityInput;
