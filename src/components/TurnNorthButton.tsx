import React from 'react';
import { Direction } from '../types';

type TurnNorthProps = {
    setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}

export default function TurnNorthButton({setDirection}: TurnNorthProps) {

    const turnRobotEast = () => {
        setDirection('north')
    }

    return (
        <button onClick={turnRobotEast} className="turn-north">
            {'^'}
        </button>
    )
}