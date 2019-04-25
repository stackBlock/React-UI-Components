import React from 'react';
import './square.css';

const Square = props => {
  return (
    <div className={`square ${props.kind}`}>{props.text}</div>
  );
};

export default Square;
