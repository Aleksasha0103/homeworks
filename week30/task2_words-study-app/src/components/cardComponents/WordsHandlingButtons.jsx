import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";

function WordsHandlingButtons({
  unknownWordsButton,
  allWordsButton,
  knownWordsButton,
  countStudiedWords,
  vocabulary,
  chooseLanguage,
}) {
  const wordsTotal = vocabulary.length;
  const wordsLearned = countStudiedWords;
  const wordsToLearn = wordsTotal - countStudiedWords;

  return (
    <>
      <section className="WordsHandlingDivsContainer">
        {chooseLanguage && vocabulary.length > 0 ? (
          <>
            <div className="unknownWords">Осталось: {wordsToLearn}</div>
            <div className="allWords">Всего слов: {wordsTotal}</div>
            <div className="knownWords">Выучено: {wordsLearned}</div>
          </>
        ) : null}
      </section>
      <section className="WordsHandlingButtonsContainer">
        <button className="unknownWordsButton" onClick={unknownWordsButton}>
          Не знаю
        </button>
        <button className="allWordsButton" onClick={allWordsButton}>
          <Link to="/">Открыть список слов</Link>
        </button>
        <button className="knownWordsButton" onClick={knownWordsButton}>
          Знаю
        </button>
      </section>
    </>
  );
}

export default WordsHandlingButtons;
