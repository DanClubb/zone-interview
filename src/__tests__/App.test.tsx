import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("App initial render is correct", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("grid", () => {
        const cells = screen.getAllByTestId("cell");
        expect(cells.length).toEqual(25);
    });

    test("place robot form", () => {
        const placeDropdowns = screen.getAllByRole("combobox");
        const placeButton = screen.getByRole("button");
        expect(placeButton).toBeInTheDocument();
        expect(placeDropdowns.length).toEqual(3);
    });

    test("robot doesnt render on the grid", () => {
        const robot = screen.queryByTestId("robot");
        expect(robot).toBeNull();
    });

    test("robot control buttons doesnt render", () => {
        const robotControlsButtons = screen.queryByTestId(
            "robot-controls-buttons"
        );
        expect(robotControlsButtons).toBeNull();
    });

    test("report robot location doesnt render", () => {
        const reportRobotLocation = screen.queryByTestId(
            "report-robot-location"
        );
        expect(reportRobotLocation).toBeNull();
    });
});
