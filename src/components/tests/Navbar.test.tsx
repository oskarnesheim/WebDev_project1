import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Navbar from "../Navbar";

describe("Navbar", () => {
  test("Should show input-container", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Navbar />
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(screen.getByText("Weathersearcher")).toBeDefined();
  });
});
