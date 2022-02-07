import React from 'react';
import {SquareProps} from '../types/Board';

const Square = ({value, onClick, winner}: SquareProps) => {
  if (!value) {
    return <button className="square" onClick={onClick} disabled={Boolean(winner)} />; 
  } else {
    return <button className={`square square_${value.toLowerCase()}`} disabled>{value}</button>
  } 
}

export default Square;