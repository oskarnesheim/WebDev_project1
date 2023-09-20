import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CityInput from "../home/city_input/CityInput";

const CITY = "London";
const UPDATED_CITY = "Oslo";
const SETCITY = vitest.fn();

describe("CityInput", () => {
  test("Should show CityInput with London as the search", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <CityInput currentSearch={CITY} updateSearch={SETCITY} />
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(screen.findAllByAltText("London")).toBeDefined();
  });
});

describe("CityInput update", () => {
  test("Should update the search to be Oslo", () => {
    fireEvent.change(screen.getByPlaceholderText("E.g., New York"), {
      target: { value: UPDATED_CITY },
    });
    expect(SETCITY).toHaveBeenCalledWith(UPDATED_CITY);
  });
});

describe("App snapshot test", () => {
  test("Snapshot match", () => {
    const result = render(
      <BrowserRouter>
        <RecoilRoot>
          <CityInput currentSearch={CITY} updateSearch={SETCITY} />
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
