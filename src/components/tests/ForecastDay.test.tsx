import ForcastDay from "../ForcastDay";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { describe, expect, test } from "vitest";

describe("ForcastDay", () => {
  test("Should show input-container", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <ForcastDay day={} />
        </RecoilRoot>
      </BrowserRouter>
    );
    const titleElement = screen.getByLabelText("Favorite cities");
    expect(titleElement).toBeDefined();
  });
});
