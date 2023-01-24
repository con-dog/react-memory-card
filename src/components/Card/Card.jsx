import React from 'react';

export default function Card({ image, handleClick }) {
  return (
    <div>
      <button type="button" onClick={handleClick}>
        <img src={image} alt="" />
      </button>
    </div>
  );
}
