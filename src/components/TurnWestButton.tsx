import React from 'react';
import { Direction } from '../types';

type TurnWestProps = {
    setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}

export default function TurnWestButton({setDirection}: TurnWestProps) {

    const turnRobotEast = () => {
        setDirection('west')
    }

    return (
        <button onClick={turnRobotEast} className="turn-west">
            {'<'}
        </button>
    )
}