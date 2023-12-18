import React from "react";
import { Direction, RobotStatus } from "../types";

type TurnEastProps = {
    setDirection: React.Dispatch<React.SetStateAction<Direction | null>>;
    setRobotStatus: React.Dispatch<React.SetStateAction<RobotStatus>>;
    newDirection: Direction;
};

export default function TurnRobotButton({
    setDirection,
    setRobotStatus,
    newDirection,
}: TurnEastProps) {
    const turnRobot = (newDirection: Direction) => {
        setRobotStatus(`Turning ${newDirection}...`);
        setDirection(newDirection);
    };

    return (
        <button
            onClick={() => turnRobot(newDirection)}
            className={`turn-${newDirection}`}
        >
            {newDirection === "north" && "^"}
            {newDirection === "east" && ">"}
            {newDirection === "south" && "v"}
            {newDirection === "west" && "<"}
        </button>
    );
}
