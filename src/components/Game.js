import React from "react";
import "./Game.css";
import rockIcon from "../images/icon-rock.svg";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";

const Game = ({ setGameStarted, userChoice, setUserChoice }) => {
  const setChoice = (e) => {
    setGameStarted(true);
    setUserChoice(e.target.dataset.id);
  };

  return (
    <section className="game-start-container">
      <button
        data-id="rock"
        className="icon-container rock-icon-container"
        onClick={setChoice}
      >
        <img src={rockIcon} alt="rock" data-id="rock" />
      </button>
      <button
        data-id="paper"
        className="icon-container paper-icon-container"
        onClick={setChoice}
      >
        <img src={paperIcon} alt="paper" data-id="paper" />
      </button>
      <button
        data-id="scissors"
        className="icon-container scissors-icon-container"
        onClick={setChoice}
      >
        <img src={scissorsIcon} alt="scissors" data-id="scissors" />
      </button>
    </section>
  );
};

export default Game;
