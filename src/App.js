import './App.css';
import Player from "./components/Player"
import React from 'react';
import Board from "./components/Board"


function App() {
  return (
    <div className='App'>
      <div className='title-container'>
        <span className='title'> Morpion </span>
        <span className='second-title'> Tic Tac Toe </span>
      </div>
      <Player>Clik</Player>
      <Board></Board>
      <Player></Player>

    </div>
  );
}

export default App;
