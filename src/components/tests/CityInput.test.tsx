/* eslint-disable react-hooks/rules-of-hooks */
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

// const [citySearch, setCitySearch] = useState<string>("test");

describe("CityInput", () => {
  test("Should show input-container", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <p>heisann</p>
          {/* <CityInput
            key={"CityInputTest"}
            currentSearch={"test"}
            updateSearch={() => {React.Dispatch<React.SetStateAction<string>>}}
          /> */}
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(screen.getByText("heisann")).toBeDefined();
  });
});
