import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("Place robot works correctly", () => {
    beforeAll(() => {
        render(<App />);
    });

    test("can select options from dropdown list", () => {
        const xDropdown = screen.getByTestId("x-coordinates");
        const yDropdown = screen.getByTestId("y-coordinates");
        const directionDropdown = screen.getByTestId("direction");
        // @ts-ignore
        expect(xDropdown.value && yDropdown.value).toBe("0");
        // @ts-ignore
        expect(directionDropdown.value).toBe("north");

        fireEvent.change(xDropdown, { target: { value: "3" } });
        fireEvent.change(yDropdown, { target: { value: "3" } });
        fireEvent.change(directionDropdown, { target: { value: "south" } });

        // @ts-ignore
        expect(xDropdown.value && yDropdown.value).toBe("3");
        // @ts-ignore
        expect(directionDropdown.value).toBe("south");
    });

    test("place button places robot onto the grid", () => {
        const placeButton = screen.queryByRole("button", { name: "Place" });
        const robot = screen.queryByTestId("robot");
        const robotControlsButtons = screen.queryByTestId(
            "robot-controls-buttons"
        );

        expect(robot).toBeNull();

        if (placeButton) {
            fireEvent.click(placeButton);

            expect(robot && robotControlsButtons).toBeInTheDocument();
            expect(placeButton).toBeNull();
        }
    });
});
