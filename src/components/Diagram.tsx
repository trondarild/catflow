import React from 'react';
import Box from './Box';
import Arrow from './Arrow';
import '../styles/Diagram.css';

const Diagram: React.FC = () => {
  return (
    <svg className="Diagram" > 
    // width="800" height="600"
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      
      <Box boxName="F" inputs={['A', 'B']} outputs={['C', 'D']} x={100} y={100} />
      <Box boxName="F" inputs={['A', 'B']} outputs={['C']} x={400} y={100} />
      
      
      <Arrow id="arrow1" x1={200} y1={125} x2={300} y2={125} />
    </svg>
  );
};

export default Diagram;
