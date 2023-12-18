import React from "react";
import { Direction, RobotPosition, RobotStatus } from "../types";
import Move from "./Move";
import PlaceRobot from "./PlaceRobot";
import TurnRobotButton from "./TurnRobotButton";

type RobotControlsProps = {
    setRobotPosition: React.Dispatch<
        React.SetStateAction<RobotPosition | null>
    >;
    setDirection: React.Dispatch<React.SetStateAction<Direction | null>>;
    direction: Direction | null;
    setRobotStatus: React.Dispatch<React.SetStateAction<RobotStatus>>;
    robotPosition: RobotPosition | null;
};

export default function RobotControls({
    setRobotPosition,
    setDirection,
    direction,
    setRobotStatus,
    robotPosition,
}: RobotControlsProps) {
    return (
        <div className="robot-controls">
            {!robotPosition ? (
                <PlaceRobot
                    setDirection={setDirection}
                    setRobotPosition={setRobotPosition}
                />
            ) : (
                <div
                    className="robot-controls__buttons"
                    data-testid="robot-controls-buttons"
                >
                    <Move
                        setRobotPosition={setRobotPosition}
                        direction={direction}
                        setRobotStatus={setRobotStatus}
                        robotPosition={robotPosition}
                    />
                    <TurnRobotButton
                        setDirection={setDirection}
                        setRobotStatus={setRobotStatus}
                        newDirection="north"
                    />
                    <TurnRobotButton
                        setDirection={setDirection}
                        setRobotStatus={setRobotStatus}
                        newDirection="east"
                    />
                    <TurnRobotButton
                        setDirection={setDirection}
                        setRobotStatus={setRobotStatus}
                        newDirection="south"
                    />
                    <TurnRobotButton
                        setDirection={setDirection}
                        setRobotStatus={setRobotStatus}
                        newDirection="west"
                    />
                </div>
            )}
        </div>
    );
}
