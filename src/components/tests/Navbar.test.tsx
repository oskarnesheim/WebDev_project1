import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";
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
    //Check if all the links are there
    expect(screen.getByText("Weathersearcher")).toBeDefined();
    expect(screen.getByText("Home")).toBeDefined();
    expect(screen.getByText("My cities")).toBeDefined();
    expect(screen.getByText("Metric")).toBeDefined();

    //Check if the metric/imperial button works
    expect(screen.queryByText("Imperial")).toBeNull();
    userEvent.click(screen.getByText("Metric"));
    expect(screen.getByText("Imperial")).toBeDefined();
    userEvent.click(screen.getByText("Imperial"));
    expect(screen.getByText("Metric")).toBeDefined();
  });
});
