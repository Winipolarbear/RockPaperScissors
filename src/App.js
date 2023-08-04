import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import Play from "./components/Play";
import Rules from "./components/Rules";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [gameScore, setGameScore] = useState(0);

  return (
    <div className="App">
      <Header gameScore={gameScore} />

      {gameStarted ? (
        <Play
          userChoice={userChoice}
          setUserChoice={setUserChoice}
          setGameStarted={setGameStarted}
          setGameScore={setGameScore}
        />
      ) : (
        <Game
          setGameStarted={setGameStarted}
          setUserChoice={setUserChoice}
          userChoice={userChoice}
        />
      )}
      <Rules />
    </div>
  );
}

export default App;
