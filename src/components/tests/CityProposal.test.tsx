import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CityProposal from "../CityProposal";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../test/setup";

describe("CityProposal", () => {
  test("Should show input-container", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RecoilRoot>
            <CityProposal city={"Sandnes"} />
          </RecoilRoot>
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(screen.getByText("Loading")).toBeDefined();
  });
});
