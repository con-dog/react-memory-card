import React from 'react';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';

export default function App() {
  return (
    <div>
      <Scoreboard />
      <Board />
    </div>
  );
}
