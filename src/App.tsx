import React, { useEffect, useState } from "react";
import "./App.css";
import ReportRobotLocation from "./components/ReportRobotLocation";
import RobotControls from "./components/RobotControls";
import TableTopGrid from "./components/TableTopGrid";
import { Direction, RobotPosition, RobotStatus } from "./types";

function App() {
    const [robotPosition, setRobotPosition] = useState<RobotPosition | null>(
        null
    );
    const [direction, setDirection] = useState<Direction | null>(null);
    const [robotStatus, setRobotStatus] = useState<RobotStatus>(
        "Waiting for your command"
    );

    useEffect(() => {
        setTimeout(() => {
            setRobotStatus("Waiting for your command");
        }, 900);
    }, [robotStatus]);
    return (
        <>
            <h1
                className={`${
                    robotStatus === "Oops! Try facing a different direction" &&
                    "text-red"
                }`}
            >
                {robotStatus}
            </h1>
            <main>
                <TableTopGrid
                    robotPosition={robotPosition}
                    direction={direction}
                />
                <div>
                    <RobotControls
                        setRobotPosition={setRobotPosition}
                        setDirection={setDirection}
                        direction={direction}
                        setRobotStatus={setRobotStatus}
                        robotPosition={robotPosition}
                    />
                    <ReportRobotLocation
                        robotPosition={robotPosition}
                        direction={direction}
                    />
                </div>
            </main>
        </>
    );
}

export default App;
