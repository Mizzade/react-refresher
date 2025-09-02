import { useState } from "react";

export function Square() {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
