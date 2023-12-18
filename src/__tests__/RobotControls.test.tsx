import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("Place robot works correctly", () => {
    beforeEach(() => {
        render(<App />);
        const placeButton = screen.getByRole("button", { name: "Place" });
        fireEvent.click(placeButton);
    });

    test("can turn robot", () => {
        const turnEastButton = screen.getByRole("button", { name: ">" });
        const robot = screen.getByTestId("robot");

        expect(robot).toHaveStyle(
            "transform: translate(50%, -50%) rotate(0deg)"
        );

        fireEvent.click(turnEastButton);

        expect(robot).toHaveStyle(
            "transform: translate(50%, -50%) rotate(90deg)"
        );
    });

    test("can move robot by 1 space", () => {
        const moveButton = screen.getByRole("button", { name: "Move" });
        const robot = screen.getByTestId("robot");

        expect(robot).toHaveStyle("left: 0rem; bottom: 0rem");

        fireEvent.click(moveButton);

        expect(robot).toHaveStyle("left: 0rem; bottom: 6rem");
    });

    test("can move robot by 1 space until robot is at, and facing, the edge of the grid", () => {
        const moveButton = screen.getByRole("button", { name: "Move" });
        const turnEastButton = screen.getByRole("button", { name: ">" });
        const robot = screen.getByTestId("robot");

        // moving robot to edge of the grid
        for (let i = 0; i < 4; i++) {
            fireEvent.click(moveButton);
        }

        expect(robot).toHaveStyle("left: 0rem; bottom: 24rem");

        fireEvent.click(moveButton);

        // robot should have same position as being at the edge of the grid
        expect(robot).toHaveStyle("left: 0rem; bottom: 24rem");

        fireEvent.click(turnEastButton);
        fireEvent.click(moveButton);

        // chaning robot direction should allow robot to move one space again
        expect(robot).toHaveStyle("left: 6rem; bottom: 24rem");
    });
});
