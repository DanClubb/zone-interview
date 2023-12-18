import React, { useState } from "react";
import { Direction, RobotPosition } from "../types";

type PlaceRobotProps = {
    setRobotPosition: React.Dispatch<
        React.SetStateAction<RobotPosition | null>
    >;
    setDirection: React.Dispatch<React.SetStateAction<Direction | null>>;
};

export default function PlaceRobot({
    setDirection,
    setRobotPosition,
}: PlaceRobotProps) {
    const [selectedCoordinates, setSelectedCoordinates] =
        useState<RobotPosition>({ x: 0, y: 0 });
    const [selectedDirection, setSelectedDirection] =
        useState<Direction>("north");

    const placeRobot = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRobotPosition(selectedCoordinates);
        setDirection(selectedDirection);
    };
    return (
        <form className="robot-controls__place" onSubmit={(e) => placeRobot(e)}>
            <label>Begin by placing your robot:</label>
            <div>
                (
                <select
                    name="x"
                    id="x"
                    onChange={(e) => {
                        setSelectedCoordinates((prev) => {
                            return {
                                ...prev,
                                x: parseInt(e.target.value),
                            } as RobotPosition;
                        });
                    }}
                    data-testid="x-coordinates"
                >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                ,
                <select
                    name="y"
                    id="y"
                    onChange={(e) => {
                        setSelectedCoordinates((prev) => {
                            return {
                                ...prev,
                                y: parseInt(e.target.value),
                            } as RobotPosition;
                        });
                    }}
                    data-testid="y-coordinates"
                >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                )
                <select
                    name="direction"
                    id="direction"
                    onChange={(e) => {
                        setSelectedDirection(e.target.value as Direction);
                    }}
                    data-testid="direction"
                >
                    <option value="north">North</option>
                    <option value="east">East</option>
                    <option value="south">South</option>
                    <option value="west">West</option>
                </select>
            </div>
            <button>Place</button>
        </form>
    );
}
