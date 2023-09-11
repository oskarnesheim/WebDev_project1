import CityProposal from "../CityProposal";
import { render, screen, cleanUp } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("CityProposal", () => {
    it("should render the component", () => {
        render(<CityProposal />);
        expect(screen.getByTestId("city-proposal")).toBeInTheDocument();
    }
});
