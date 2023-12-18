import React, { useEffect, useState } from "react";
import { Direction, RobotPosition } from "../types";

type RobotProps = {
    robotPosition: RobotPosition | null;
    direction: Direction | null;
};

export default function Robot({ robotPosition, direction }: RobotProps) {
    const [degree, setDegree] = useState(0);
    const robotDirectionToDegrees = (): void => {
        switch (direction) {
            case "north":
                setDegree(0);
                break;
            case "east":
                setDegree((prev) => (prev >= 0 ? 90 : -270));
                break;
            case "south":
                setDegree((prev) => (prev >= 0 ? 180 : -180));
                break;
            case "west":
                setDegree((prev) => (prev > 0 ? 270 : -90));
        }
    };

    useEffect(() => {
        robotDirectionToDegrees();
    }, [direction]);
    return (
        <>
            {robotPosition && (
                <div
                    className="robot"
                    style={{
                        left: `${robotPosition.x * 6}rem`,
                        bottom: `${robotPosition.y * 6}rem`,
                        transform: `translate(50%, -50%) rotate(${degree}deg)`,
                    }}
                    data-testid="robot"
                >
                    <div className="robot-vision"></div>
                </div>
            )}
        </>
    );
}
