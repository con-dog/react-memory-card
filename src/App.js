// import Board from './components/Board/Board';
// import Scoreboard from './components/Scoreboard/Scoreboard';
import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import bulbasaurImg from './components/Board/images/1.png';
import ivysaurImg from './components/Board/images/2.png';
import venusaurImg from './components/Board/images/3.png';
import charmanderImg from './components/Board/images/4.png';
import charmeleonImg from './components/Board/images/5.png';
import charizardImg from './components/Board/images/6.png';

export default function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  return (
    <div>
      <Scoreboard score={score} topScore={topScore} />
      <Board score={score} topScore={topScore} setScore={setScore} setTopScore={setTopScore} clickedCards={clickedCards} setClickedCards={setClickedCards} />
    </div>
  );
}

function Scoreboard(props) {
  const { score, topScore } = props;
  return (
    <>
      <p>
        Current Score :
        {' '}
        {score}
      </p>
      <p>
        Top Score :
        {topScore}
      </p>
    </>
  );
}

function Board(props) {
  const {
    score, topScore, setScore, setTopScore, clickedCards, setClickedCards,
  } = props;

  const [cards, setCards] = useState(
    [
      {
        id: 1,
        name: 'Bulbasaur',
        image: bulbasaurImg,
      },
      {
        id: 2,
        name: 'Ivysaur',
        image: ivysaurImg,
      },
      {
        id: 3,
        name: 'Venusaur',
        image: venusaurImg,
      },
      {
        id: 4,
        name: 'Charmander',
        image: charmanderImg,
      },
      {
        id: 5,
        name: 'Charmeleon',
        image: charmeleonImg,
      },
      {
        id: 6,
        name: 'Charizard',
        image: charizardImg,
      },
    ],
  );

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    setCards(shuffleArray(cards));
  }, []);

  function handleClick(e) {
    // Game logic
    const pokemon = e.currentTarget.name;
    setCards(shuffleArray(cards));
    if (clickedCards.includes(pokemon)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, e.currentTarget.name]);
    }
  }

  return (
    <div>
      {cards.map(
        (card) => <Card id={card.id} key={card.id} name={card.name} image={card.image} handleClick={handleClick} />,
      )}
    </div>
  );
}

function Card({ image, name, handleClick }) {
  return (
    <div>
      <button name={name} type="button" onClick={handleClick}>
        <img src={image} alt="" />
      </button>
    </div>
  );
}
