import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";

function LanguageCardButtons() {
  return (
    <section className="LanguageCardButtonsContainer">
      <div className="unknownWords"></div>
      <button className="unknownWordsButton">Не знаю</button>
      <div className="allWords"></div>
      <button className="allWordsButton">
        <Link to="/WordsList">Открыть список слов</Link>
      </button>
      <div className="knownWords"></div>
      <button className="knownWordsButton">Знаю</button>
    </section>
  );
}

export default LanguageCardButtons;
