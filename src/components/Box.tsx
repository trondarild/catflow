

import React from 'react';
import '../styles/Box.css';
import Port from './Port';

interface BoxProps {
    boxName: string;
    inputs: string[];
    outputs: string[];
    x: number;
    y: number;
  }
  

interface PortPosition {
  x: number;
  y: number;
}

const Box: React.FC<BoxProps> = ({ boxName, inputs, outputs, x, y }) => {
  const inputPortPositions: PortPosition[] = inputs.map((_, i) => ({ x: 0, y: 15 + i * 20 }));
  const outputPortPositions: PortPosition[] = outputs.map((_, i) => ({ x: 100, y: 15 + i * 20 }));

  return (
    <g className="Box" transform={`translate(${x}, ${y})`}>
      <rect x={0} y={0} width={100} height={50} />
      <text x={50} y={25} textAnchor="middle" dominantBaseline="central">
        {boxName}
      </text>
      {inputPortPositions.map((pos, i) => (
        <Port key={`input-${i}`} x={pos.x} y={pos.y} type="input" portName={inputs[i]} />
      ))}
      {outputPortPositions.map((pos, i) => (
        <Port key={`output-${i}`} x={pos.x} y={pos.y} type="output" portName={outputs[i]} />
      ))}
    </g>
  );
};

export default Box;


