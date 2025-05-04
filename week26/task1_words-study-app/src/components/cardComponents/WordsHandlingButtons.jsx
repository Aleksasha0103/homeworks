import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";

function WordsHandlingButtons({ unknownWordsButton, allWordsButton, knownWordsButton }) {
  return (
    <section className="WordsHandlingButtonsContainer">
      <div className="unknownWords"></div>
      <button className="unknownWordsButton" onClick={unknownWordsButton}>
        Не знаю
      </button>
      <div className="allWords"></div>
      <button className="allWordsButton" onClick={allWordsButton}>
        <Link to="/">Открыть список слов</Link>
      </button>
      <div className="knownWords"></div>
      <button className="knownWordsButton" onClick={knownWordsButton}>
        Знаю
      </button>
    </section>
  );
}

export default WordsHandlingButtons;
