import React from 'react';
import { Direction } from '../types';

type TurnSouthProps = {
    setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}

export default function TurnSouthButton({setDirection}: TurnSouthProps) {

    const turnRobotEast = () => {
        setDirection('south')
    }

    return (
        <button onClick={turnRobotEast} className="turn-south">
            {'v'}
        </button>
    )
}