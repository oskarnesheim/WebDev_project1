/* eslint-disable @typescript-eslint/no-unused-vars */
type CityInputProps = {
  updateSearch: React.Dispatch<React.SetStateAction<string>>;
  currentSearch: string;
};

function CityInput({ updateSearch, currentSearch }: CityInputProps) {
  return (
    <form>
      <label htmlFor="cityName">Enter City Name:</label>
      <input
        type="text"
        id="cityName"
        value={currentSearch}
        onChange={(event) => updateSearch(event.target.value)}
        placeholder="E.g., New York"
        required
      />
    </form>
  );
}

export default CityInput;
