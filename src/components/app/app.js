import React from 'react';
import './app.css';
import ChessField from '../chess-field';


const App = () => {
  return (
    <div className="App">
      <header> Knights Move </header>
      <ChessField />
    </div>
  );
}

export default App;
