import React, { useState } from "react";
import { Direction, RobotPosition } from "../types";

type ReportRobotLocationProps = {
    robotPosition: RobotPosition | null;
    direction: Direction | null;
};

export default function ReportRobotLocation({
    robotPosition,
    direction,
}: ReportRobotLocationProps) {
    const [revealLocation, setRevealLocation] = useState(false);
    return (
        <>
            {robotPosition && (
                <div data-testid="report-robot-location">
                    <button
                        className="reveal-button"
                        onClick={() => setRevealLocation((prev) => !prev)}
                    >
                        <span>Click</span> to
                        <span>{revealLocation ? " hide" : " reveal"}</span>{" "}
                        robot location
                    </button>
                    <span
                        className={`location ${
                            revealLocation ? "reveal-location" : "hide-location"
                        }`}
                        data-testid="location"
                    >{`${robotPosition.x}, ${robotPosition.y}, ${direction}`}</span>
                </div>
            )}
        </>
    );
}
