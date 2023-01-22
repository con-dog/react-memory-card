import React from 'react';
import Card from '../Card/Card';
import styles from './Board.module.css';

export default function Board() {
  return (
    <div className={styles.board}>
      <Card image={1} />
      <Card image={2} />
    </div>
  );
}
