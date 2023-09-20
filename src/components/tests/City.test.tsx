import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { describe, expect, test } from "vitest";
import City from "../city/City";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../test/setup";
import userEvent from "@testing-library/user-event";

describe("City", () => {
  test("Should show the current weather the London", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RecoilRoot>
            <City />
          </RecoilRoot>
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.findAllByTitle("London")).toBeDefined();
    });
  });

  test.skip("Should toggle favorite", async () => {
    await waitFor(() => userEvent.click(screen.getByText("★")));
    await waitFor(() => userEvent.click(screen.getByText("★")));
    await waitFor(() => userEvent.click(screen.getByText("☆")));
  });
});
