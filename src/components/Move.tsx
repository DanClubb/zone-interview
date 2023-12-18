import React from "react";
import { Direction, RobotPosition, RobotStatus } from "../types";

type MoveProps = {
    direction: Direction | null;
    robotPosition: RobotPosition | null;
    setRobotPosition: React.Dispatch<
        React.SetStateAction<RobotPosition | null>
    >;
    setRobotStatus: React.Dispatch<React.SetStateAction<RobotStatus>>;
};

export default function Move({
    setRobotPosition,
    direction,
    setRobotStatus,
    robotPosition,
}: MoveProps) {
    const moveRobot = (): void => {
        if (robotPosition !== null) {
            setRobotPosition((prev) => {
                const currentX = prev!.x;
                const currentY = prev!.y;
                switch (direction) {
                    case "north":
                        if (currentY < 4) {
                            setRobotStatus("Moving...");
                            return {
                                x: currentX,
                                y: currentY + 1,
                            } as RobotPosition;
                        } else {
                            setRobotStatus(
                                "Oops! Try facing a different direction"
                            );
                            return prev;
                        }
                    case "east":
                        if (currentX < 4) {
                            setRobotStatus("Moving...");
                            return {
                                x: currentX + 1,
                                y: currentY,
                            } as RobotPosition;
                        } else {
                            setRobotStatus(
                                "Oops! Try facing a different direction"
                            );
                            return prev;
                        }
                    case "south":
                        if (currentY > 0) {
                            setRobotStatus("Moving...");
                            return {
                                x: currentX,
                                y: currentY - 1,
                            } as RobotPosition;
                        } else {
                            setRobotStatus(
                                "Oops! Try facing a different direction"
                            );
                            return prev;
                        }
                    case "west":
                        if (currentX > 0) {
                            setRobotStatus("Moving...");
                            return {
                                x: currentX - 1,
                                y: currentY,
                            } as RobotPosition;
                        } else {
                            setRobotStatus(
                                "Oops! Try facing a different direction"
                            );
                            return prev;
                        }
                    default:
                        return prev;
                }
            });
        }
    };
    return (
        <button type="button" onClick={moveRobot} className="move">
            Move
        </button>
    );
}
