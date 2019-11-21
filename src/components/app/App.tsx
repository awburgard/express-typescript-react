import React from 'react';
import './App.css';
import Calc from '../calc/Calc'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>I Will Teach You To Be Rich</code>
          <Calc />
        </p>
      </header>
    </div>
  );
}

export default App;
