export type RobotPosition = {
    x: 0 | 1 | 2 | 3 | 4;
    y: 0 | 1 | 2 | 3 | 4;
};

export type Direction = "north" | "east" | "south" | "west";

export type RobotStatus =
    | "Waiting for your command"
    | "Moving..."
    | "Turning north..."
    | "Turning east..."
    | "Turning south..."
    | "Turning west..."
    | "Oops! Try facing a different direction";
