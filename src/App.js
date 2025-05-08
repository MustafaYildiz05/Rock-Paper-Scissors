import React, { useState } from 'react';
import './App.css';
import Rock from './materials/Rock.png';
import Paper from './materials/Paper.png';
import Scissors from './materials/Scissors.png';

var Movement = ['rock', 'paper', 'scissors'];
var Scores = ['system', 'user', 'draw'];

function App() {
  const [winner, setWinner] = useState('');
  const [systemMove, setSystemMove] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  function randomMovement(userMovement) {
    var systemIndex = Math.floor(Math.random() * Movement.length);
    var systemMovement = Movement[systemIndex];
    setSystemMove(systemMovement);
    if (userMovement === systemMovement) {
      setWinner(Scores[2]);
    } else if (
      (userMovement === 'rock' && systemMovement === 'scissors') ||
      (userMovement === 'paper' && systemMovement === 'rock') ||
      (userMovement === 'scissors' && systemMovement === 'paper')
    ) {
      setWinner(Scores[1]); // user wins
    } else {
      setWinner(Scores[0]); // system wins
    }
    setShowPopup(true);
    setShowMenu(false);
  }


  const RockClick = () => {
    randomMovement('rock');
  };
  const PaperClick = () => {
    randomMovement('paper');
  };
  const ScissorsClick = () => {
    randomMovement('scissors');
  };
  return (
    <div className="App">
      {showMenu&& (
      <div className="container">
        <img src={Rock} alt="Rock" onClick={RockClick} />
        <img src={Paper} alt="Paper" onClick={PaperClick} />
        <img src={Scissors} alt="Scissors" onClick={ScissorsClick} />
      </div>
      )}
      {showPopup && (
      <div className="popup">
        <div className="popup-content">
          <h1>Rock Paper Scissors</h1>
          <h1>Winner: {winner} </h1>
          <h1>System Movement: {systemMove} </h1>
          <button onClick={() => setShowPopup(false) || setShowMenu(true)}>Close</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
