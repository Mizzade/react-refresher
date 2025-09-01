import { useState } from "react";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

export function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
}

export function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  const NUM_ROWS = 3;
  const NUM_COLS = 3;
  const board_squares = Array.from({ length: NUM_ROWS }, (_, rowIndex) => (
    <div key={rowIndex} className="board-row">
      {Array.from({ length: NUM_COLS }, (_, colIndex) => (
        <Square value={squares[rowIndex * NUM_COLS + colIndex]} onSquareClick={() => handleClick(rowIndex * NUM_COLS + colIndex)} />
      ))}
    </div>
  ))

  return (
    <>
      <div className="status">{status}</div>
      {board_squares}
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    const description = move === currentMove
      ? "You are at move #" + move
      : move > 0
        ? 'Go to move #' + move
        : 'Go to game start';

    const element = move === currentMove
      ? <span>{description}</span>
      : <button onClick={() => jumpTo(move)}>{description}</button>


    return (
      <li key={move}>{element}</li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}


function calculateWinner(squares: string[]) {
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
    if (squares[a] === squares[b] && squares[b] == squares[c]) {
      return squares[a];
    }
  }

  return null
}
