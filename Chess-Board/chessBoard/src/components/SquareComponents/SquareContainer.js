import React from 'react';
import './square.css';

const SquareContainer = props => {
  return (
    <div className={`square-container ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SquareContainer;
