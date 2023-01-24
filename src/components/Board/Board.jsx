import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Board.module.css';
import bulbasaurImg from './images/1.png';
import ivysaurImg from './images/2.png';
import venusaurImg from './images/3.png';
import charmanderImg from './images/4.png';
import charmeleonImg from './images/5.png';
import charizardImg from './images/6.png';

export default function Board() {
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

  function handleClick() {
    setCards(shuffleArray(cards));
  }

  return (
    <div>
      {cards.map(
        (card) => <Card id={card.id} key={card.id} name={card.name} image={card.image} handleClick={handleClick} />,
      )}
    </div>
  );
}
