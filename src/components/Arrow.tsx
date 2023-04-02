import React from 'react';
import '../styles/Arrow.css';


interface ArrowProps {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const Arrow: React.FC<ArrowProps> = ({ id, x1, y1, x2, y2 }) => {
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        markerEnd="url(#arrowhead)"
        className="arrow"
      />
    </g>
  );
};

export default Arrow;
