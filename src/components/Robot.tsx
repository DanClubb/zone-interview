import React from 'react';
import { RobotPosition } from '../types';

type RobotProps = {
    robotPosition: RobotPosition;
}

export default function Robot({robotPosition}: RobotProps) {
    console.log('Robot', robotPosition)
    return (
        <div className="robot" style={{left: `${robotPosition.x * 6}rem`, bottom: `${robotPosition.y * 6}rem`}}>
            
        </div>
    )
}
