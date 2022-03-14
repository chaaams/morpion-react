import './App.css';
import Player from "./components/Player"
import React from 'react';
import Board from "./components/Board"

function App() {
  return (
    <div>
      <h1 className='title'>Jeux du Morpion</h1>
      <Player>Clik</Player>
      <Board></Board>

    </div>
  );
}

export default App;
