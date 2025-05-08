import React, { useState } from 'react';
import './App.css';
import Rock from './materials/Rock.png';
import Paper from './materials/Paper.png';
import Scissors from './materials/Scissors.png';

var Movement = ['rock', 'paper', 'scissors'];
var Scores = ['system', 'user', 'draw'];

function randomMovement(userMovement) {
  var systemIndex = Math.floor(Math.random() * Movement.length);  
  var systemMovement = Movement[systemIndex];
  let winner = null;

  if (userMovement === systemMovement) {
    winner = Scores[2]; // draw 
  } else if (
    (userMovement === 'rock' && systemMovement === 'scissors') ||
    (userMovement === 'paper' && systemMovement === 'rock') ||
    (userMovement === 'scissors' && systemMovement === 'paper')
  ) {
    winner = Scores[1]; // user wins
  } else {
    winner = Scores[0]; // system wins
  }

  alert(winner + systemMovement);
  return winner;
}

function App() {
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
      <div className="container">
        <img src={Rock} alt="Rock" onClick={RockClick} />
        <img src={Paper} alt="Paper" onClick={PaperClick}/>
        <img src={Scissors} alt="Scissors" onClick={ScissorsClick}/>
      </div>
    </div>
  );
}

export default App;
