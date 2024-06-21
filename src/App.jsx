import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid/Grid";

function App() {
  const [playerTurn, setPlayerTurn] = useState("X");
  const [hidePlayer, setHidePlayer] = useState(false);
  return (
    <main>
      <div className="game-screen">
        <Grid playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} setHidePlayer={setHidePlayer}/>
        {!hidePlayer && (
          <div className="choose-player">
            <span>Choose Your Player : </span>
            <button
              onClick={() => {
                setPlayerTurn("X");
                setHidePlayer(true);
              }}
            >
              X
            </button>
            <button
              onClick={() => {
                setPlayerTurn("O");
                setHidePlayer(true);
              }}
            >
              O
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
