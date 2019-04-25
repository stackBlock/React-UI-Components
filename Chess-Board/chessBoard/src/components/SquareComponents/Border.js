import React from 'react';
import './square.css';

const Border = props => {
  return (
    <div className={`border ${props.kind}`}>{props.text}</div>
  );
};

export default Border;
