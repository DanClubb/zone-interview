import React from 'react';
import { Direction } from '../types';

type TurnEastProps = {
    setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}

export default function TurnEastButton({setDirection}: TurnEastProps) {

    const turnRobotEast = () => {
        setDirection('east')
    }

    return (
        <button onClick={turnRobotEast} className="turn-east">
            {'>'}
        </button>
    )
}
