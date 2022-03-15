import './App.css';
import Player from "./components/Player"
import React from 'react';
import Cart from './components/Cart';
// import Board from "./components/Board"
// import SquareTest from "./components/SquareTest"


function App() {
  return (
    <div className='App'>
      <div className='title-container'>
        {/* <span className='title'> Morpion </span>
        <span className='second-title'> Tic Tac Toe </span> */}
                            <div className="wrapper">
                                <ul className="dynamique-texte">
                                    <li>
                                        <span>Morpion</span>
                                    </li>
                                    <li>
                                        <span>Tic Tac Toe</span>
                                    </li>
                                </ul>
                            </div>
                            
      <Player>Clik</Player>
      </div>
      <Cart/>
      {/* <Board></Board> */}
    </div>
  );
}

export default App;
