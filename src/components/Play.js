import React, { useState, useEffect } from "react";
import "./Play.css";

import rockIcon from "../images/icon-rock.svg";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";

const Play = ({ userChoice, setGameStarted, setGameScore }) => {
  const [computerChoice, setComputerChoice] = useState();
  const [userWin, setUserWin] = useState();
  const [counter, setCounter] = useState(2);
  const choices = ["rock", "paper", "scissors"];

  // Random house choice func
  const newHousePick = () => {
    let randomHousePick = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomHousePick);
  };

  // Random house choice on load
  useEffect(() => {
    console.log("new house pick");
    newHousePick();
  }, []);

  // Game result func
  const gameResultCalculation = () => {
    console.log(
      "user choose " + userChoice,
      "|| computer choose " + computerChoice
    );

    if (computerChoice !== "undefined" && computerChoice !== undefined) {
      if (userChoice === "rock" && computerChoice === "paper") {
        setUserWin("win");
        console.log("user win");
        setGameScore((score) => score + 1);
        return;
      }
      if (userChoice === "rock" && computerChoice === "scissors") {
        setUserWin("lose");
        console.log("user lost");
        setGameScore((score) => score - 1);
        return;
      }
      if (userChoice === "paper" && computerChoice === "scissors") {
        setUserWin("lose");
        console.log("user lost");
        setGameScore((score) => score - 1);
        return;
      }
      if (userChoice === "paper" && computerChoice === "rock") {
        setUserWin("win");
        console.log("user win");
        setGameScore((score) => score + 1);
        return;
      }
      if (userChoice === "scissors" && computerChoice === "rock") {
        setUserWin("lose");
        console.log("user lost");
        setGameScore((score) => score - 1);
        return;
      }
      if (userChoice === "scissors" && computerChoice === "paper") {
        setUserWin("win");
        console.log("user win");
        setGameScore((score) => score + 1);
        return;
      } else {
        setUserWin("draw");
        console.log("draw");
      }
    }
  };

  // 3 sec timer to show computer/house choice
  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : gameResultCalculation();

    return () => {
      clearInterval(timer);
    };
  }, [counter, computerChoice]);

  return (
    <section className="game-result-container">
      <section className="player-container">
        <div
          className={`icon-container ${userChoice}-icon-container ${
            userWin === "win" ? `winner-${userChoice}` : ""
          }`}
        >
          <img
            src={
              userChoice === "paper"
                ? paperIcon
                : userChoice === "rock"
                ? rockIcon
                : scissorsIcon
            }
            alt={`${userChoice}`}
          />
        </div>
        <p className="picked-choice-text"> You picked {userChoice}</p>
      </section>
      <section className="result">
        {userWin === "win" && "You win"}
        {userWin === "lose" && "You lost"}
        {userWin === "draw" && "Draw"}
        {counter === 0 && (
          <button
            className="play-again-btn"
            onClick={() => setGameStarted(false)}
          >
            Play again
          </button>
        )}
      </section>
      <section className="computer-container">
        {counter === 0 ? (
          <div
            className={`icon-container ${computerChoice}-icon-container ${
              userWin === "lose" ? `winner-${computerChoice}` : ""
            }`}
          >
            <img
              src={
                computerChoice === "paper"
                  ? paperIcon
                  : computerChoice === "rock"
                  ? rockIcon
                  : scissorsIcon
              }
              alt={`${computerChoice}`}
            />
          </div>
        ) : (
          <div className="counter">{counter}</div>
        )}
        <p className="picked-choice-text">
          House picked {counter === 0 ? computerChoice : "???"}
        </p>
      </section>
    </section>
  );
};

export default Play;
