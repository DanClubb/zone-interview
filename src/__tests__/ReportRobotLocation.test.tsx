import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("", () => {
    beforeEach(() => {
        render(<App />);
        const placeButton = screen.getByRole("button", { name: "Place" });
        fireEvent.click(placeButton);
    });

    test("renders when robot is placed on the grid", () => {
        const reportRobotLocation = screen.queryByTestId(
            "report-robot-location"
        );

        expect(reportRobotLocation).toBeInTheDocument();
    });

    test("clicking the button toggles whether the location is hidden", () => {
        const reportRobotLocationButton = screen.queryByRole("button", {
            name: "Click to reveal robot location",
        });
        const location = screen.getByTestId("location");

        expect(reportRobotLocationButton).toHaveTextContent("reveal");
        expect(location).toHaveClass("hide-location");

        fireEvent.click(reportRobotLocationButton!);

        expect(reportRobotLocationButton).toHaveTextContent("hide");
        expect(location).toHaveClass("reveal-location");
    });
});
