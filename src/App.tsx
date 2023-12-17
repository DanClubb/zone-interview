import { useState } from 'react';
import './App.css';
import RobotControls from './components/RobotControls';
import TableTopGrid from './components/TableTopGrid';
import { Direction, RobotPosition } from './types';


function App() {
  const [robotPosition, setRobotPosition] = useState<RobotPosition>({x: 0, y:0});
  const [direction, setDirection] = useState<Direction>('north');

  console.log(robotPosition, direction)

 
  return (
    <main>
      <TableTopGrid robotPosition={robotPosition} />
      <RobotControls setRobotPosition={setRobotPosition} setDirection={setDirection} direction={direction} />
    </main>
  )
}

export default App
