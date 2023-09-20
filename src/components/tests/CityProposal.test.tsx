import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CityProposal from "../home/city_proposal/CityProposal";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../test/setup";

const CITY = "London";
const SETCITY = vitest.fn();

describe("CityProposal", () => {
  test("Should show proposed cities", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RecoilRoot>
            <CityProposal setCity={SETCITY} city={CITY} />
          </RecoilRoot>
        </BrowserRouter>
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.findAllByAltText("London")).toBeDefined();
    });
  });
});
