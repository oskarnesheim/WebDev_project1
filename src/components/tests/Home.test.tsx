import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "../Home";

describe("Home", () => {
  test("Should show input-container", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(screen.getByText("Weathersearcher")).toBeDefined();
  });
});
