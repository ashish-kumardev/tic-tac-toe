import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Grid.module.css";
import winner from "../helpers/winner";

function Grid({ playerTurn, setPlayerTurn, setHidePlayer }) {
  const [board, setBoard] = useState(new Array(9).fill(""));
  const [isWinner, setIsWinner] = useState(false);

  function play(index) {
    setHidePlayer(true)
    if (playerTurn === "X" && !board[index]) {
      board[index] = "X";
    } else if (playerTurn === "O" && !board[index]) {
      board[index] = "O";
    } else {
      return;
    }
    setBoard([...board]);
    const isWin = winner(board, playerTurn);
    if (isWin) {
      setIsWinner(true);
      return;
    }
    setPlayerTurn((prev) => {
      if (prev === "X") return "O";
      return "X";
    });
  }

  function reset() {
    setPlayerTurn("X");
    setBoard(new Array(9).fill(""));
    setIsWinner(false)
    setHidePlayer(false)
  }

  return (
    <>
      <h1 className={styles.currentPlayer}>Current Player : {playerTurn}</h1>
      {isWinner && (
        <>
          <h2 className={styles.currentPlayer}>Winner is : {playerTurn}</h2>
        </>
      )}
      {(isWinner || !board.includes("")) && (
        <button onClick={reset} className={styles.reset}>
          Reset Game
        </button>
      )}
      <div className={`${styles.grid} ${(isWinner || !board.includes("")) && styles.opacity}`}>
        {board.map((value, idx) => (
          <Card key={idx} index={idx} onPlay={play} player={value} isWinner={isWinner}/>
        ))}
      </div>
    </>
  );
}
export default Grid;
