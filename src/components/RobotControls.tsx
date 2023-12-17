import React from 'react';
import { Direction, RobotPosition } from '../types';
import Move from './Move';
import TurnEastButton from './TurnEastButton';
import TurnNorthButton from './TurnNorthButton';
import TurnSouthButton from './TurnSouthButton';
import TurnWestButton from './TurnWestButton';


type RobotControlsProps = {
    setRobotPosition: React.Dispatch<React.SetStateAction<RobotPosition>>;
    setDirection: React.Dispatch<React.SetStateAction<Direction>>;
    direction: Direction
}

export default function RobotControls({setRobotPosition, setDirection, direction}: RobotControlsProps) {
    return (
        <div className="robot-controls">
            <Move setRobotPosition={setRobotPosition} direction={direction} />
            <TurnNorthButton setDirection={setDirection} />
            <TurnEastButton setDirection={setDirection} />
            <TurnSouthButton setDirection={setDirection} />
            <TurnWestButton setDirection={setDirection} />
        </div>
    )
}
