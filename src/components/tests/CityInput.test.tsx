import CityInput from "../CityProposal";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";

describe("CityInput", () => {
  it("Should show input-container", () => {
    render(<CityInput city={"Sandnes"} />);
    const titleElement = screen.getRoleBy("heading");
    expect(titleElement).toBeInTheDocument();
  });
});
