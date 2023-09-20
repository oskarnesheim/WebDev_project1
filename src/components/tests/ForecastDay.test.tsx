import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { describe, expect, test } from "vitest";
import { FORECASTDAY } from "../../test/setup";
import ForecastDay from "../city/forecast/ForecastDay";

describe("ForecastDay", () => {
  test("Should show input-container", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <ForecastDay day={FORECASTDAY} />
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(screen.getAllByAltText("Overcast")).toBeDefined();
  });
});
