import React from 'react';

export default function Card({ image }) {
  return (
    <div>
      <img src={`/images/${image}.png`} alt="" />
    </div>
  );
}
