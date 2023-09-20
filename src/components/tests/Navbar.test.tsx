import { render } from "@testing-library/react";
import { describe, expect, test, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";
import Navbar from "../navbar/Navbar";

describe("Navbar", () => {
  test("Renders everything in the navbar", () => {
    const scr = render(
      <BrowserRouter>
        <RecoilRoot>
          <Navbar />
        </RecoilRoot>
      </BrowserRouter>
    );
    //Check if all the links are there
    expect(scr.getByText("WeatherSearcher")).toBeDefined();
    expect(scr.getByText("Home")).toBeDefined();
    expect(scr.getByText("Metric")).toBeDefined();

    //Check if the metric/imperial button works
    expect(scr.queryByText("Imperial")).toBeNull();
    userEvent.click(scr.getByText("Metric"));
    expect(scr.getByText("Imperial")).toBeDefined();
    userEvent.click(scr.getByText("Imperial"));
    expect(scr.getByText("Metric")).toBeDefined();

    //Check if the links work properly
    const home_url = window.location.href;
    userEvent.click(scr.getByText("Home"));
    expect(home_url == window.location.href).toBeTruthy();

    const logo_url = window.location.href;
    userEvent.click(scr.getByText("Home"));
    expect(logo_url == window.location.href).toBeTruthy();
  });
});

describe("Navbar snapshot test", () => {
  it("Snapshot match", () => {
    const result = render(
      <BrowserRouter>
        <RecoilRoot>
          <Navbar />
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  });
});
