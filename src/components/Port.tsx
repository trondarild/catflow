import React from 'react';
import '../styles/Port.css';

interface PortProps {
  x: number;
  y: number;
  type: 'input' | 'output';
  portName: string;
}

const Port: React.FC<PortProps> = ({ x, y, type, portName }) => {
  return (
    <g className={`Port ${type}`} transform={`translate(${x}, ${y})`}>
      <circle cx={0} cy={0} r={5} />
      <text x={type === 'input' ? -10 : 10} y={5} textAnchor={type === 'input' ? 'end' : 'start'}>
        {portName}
      </text>
    </g>
  );
};

export default Port;
