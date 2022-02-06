import React from 'react';
import {SquareProps} from '../types/Board';

const Square = ({value, onClick}: SquareProps) => {
  return (
    <button className="square" onClick={onClick}> 
      {value}
    </button>
  )
}

export default Square;