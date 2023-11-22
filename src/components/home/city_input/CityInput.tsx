import "./CityInput.css";

type CityInputProps = {
  updateSearch: React.Dispatch<React.SetStateAction<string>>;
  currentSearch: string;
};

/**
 * CityInput component that renders the input field for the city
 * @param updateSearch : React.Dispatch<React.SetStateAction<string>>
 * @param currentSearch : string
 * @returns CityInput component
 */
function CityInput({ updateSearch, currentSearch }: CityInputProps) {
  return (
    <div className="input-container">
      <input
        type="text"
        id="city_input"
        value={currentSearch}
        onChange={(event) => updateSearch(event.target.value)}
        placeholder="E.g., New York"
        required
      />
    </div>
  );
}

export default CityInput;
