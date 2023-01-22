import React from 'react';
import Card from '../Card/Card';
import styles from './Board.module.css';

export default function Board() {
  const cards = [];

  // State?
  for (let i = 0; i < 12; i++) {
    cards.push(
      <Card image={i} />,
    );
  }

  return (
    <div className={styles.board}>
      {cards}
    </div>
  );
}
