import React from 'react';
import './styles/App.css';
import Diagram from './components/Diagram';

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
