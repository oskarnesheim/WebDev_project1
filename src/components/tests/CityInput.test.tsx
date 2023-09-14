/* eslint-disable react-hooks/rules-of-hooks */
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CityInput from "../CityInput";

const CITY = "London";
const SETCITY = vitest.fn();

describe("CityInput", () => {
  test("Should show input-container", () => {
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
