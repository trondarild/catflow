import React from 'react';
import './App.css';
import Diagram from './Diagram';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CatFlow</h1>
      </header>
      <main>
        <Diagram />
      </main>
    </div>
  );
};

export default App;
