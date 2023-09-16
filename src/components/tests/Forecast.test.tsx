import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { describe, expect, test } from "vitest";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../test/setup";
import Forecast from "../city/forecast/Forecast";

describe("City", () => {
  test("Should show the forecast for London", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RecoilRoot>
            <Forecast />
          </RecoilRoot>
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.findAllByTitle("London")).toBeDefined();
    });
  });
});
