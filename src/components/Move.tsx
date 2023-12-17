import React from 'react';
import { Direction, RobotPosition } from '../types';


type MoveProps = {
    direction: Direction;
    setRobotPosition: React.Dispatch<React.SetStateAction<RobotPosition>>;
}

export default function Move({setRobotPosition, direction}: MoveProps) {
    const moveRobot = (): void => {
        setRobotPosition((prev) => {
            const currentX = prev.x;
            const currentY = prev.y;
                switch(direction) {
                    case 'north': 
                    return currentY < 4 ? {x: currentX, y: currentY + 1} as RobotPosition : prev;
                    case 'east': 
                    return currentX < 4 ? {x: currentX + 1, y: currentY} as RobotPosition : prev;
                    case 'south': 
                    return currentY > 0 ? {x: currentX, y: currentY - 1} as RobotPosition : prev;
                    case 'west': 
                    return currentX > 0 ?  {x: currentX - 1, y: currentY} as RobotPosition : prev ;
                }
        })
    }
    return (
        <button type="button" onClick={moveRobot} className="move">
            Move
        </button>
    )
}
