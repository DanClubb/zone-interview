import React from "react";
import "../styles/table-top-grid.css";
import { Direction, RobotPosition } from "../types";
import Robot from "./Robot";

type TableTopGridProps = {
    robotPosition: RobotPosition | null;
    direction: Direction | null;
};

export default function TableTopGrid({
    robotPosition,
    direction,
}: TableTopGridProps) {
    const cells = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
    ];

    return (
        <div className="table-top-grid">
            {cells.map((cell) => (
                <div key={cell} className="cell" data-testid="cell"></div>
            ))}
            <Robot robotPosition={robotPosition} direction={direction} />
        </div>
    );
}
