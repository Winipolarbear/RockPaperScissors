import React from "react";
import "./Header.css";

const Header = ({ gameScore }) => {
  return (
    <header>
      <section className="title" onClick={() => window.location.reload()}>
        <p>じゃん拳<br>
        </br>Janken</p>
      </section>
      <section className="score-container">
        <span className="score-title">Score</span>
        <div className="score-number">{gameScore}</div>
      </section>
    </header>
  );
};

export default Header;
