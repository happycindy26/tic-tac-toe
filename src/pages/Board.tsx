import React, {useState, useEffect} from "react";
import Square from "../components/Square";
import {Player} from "../types/Board";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
    Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
  );
  const [winner, setWinner] = useState<Player>(null)

  const reset = () => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? 'X' : 'O');
    setWinner(null);
  }

  const handleSetCurrentPlayer = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    })
    setSquares(newData);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]) {
          return squares[a];
        }
    }
    return null;
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w)
    }
    else if (!w && !squares.filter(square => !square).length) {
      setWinner('Both of you');
    }
  })
  return (
    <div>
      {winner ? (<h6>Congratulations! {winner}</h6>) :
      (<h6>Hi {currentPlayer}, it's your turn</h6>)}
      <div className="grid">
        {Array(9).fill(null).map((_, index) => {
          return <Square 
            key={index}
            onClick={()=>handleSetCurrentPlayer(index)}
            value={squares[index]}
          />
        })}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Board;