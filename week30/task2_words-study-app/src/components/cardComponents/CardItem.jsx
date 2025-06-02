import React, { useState, useEffect, useRef } from "react";
import useLocalStorage from "../common/useLocalStorage";
import "../../styles/styles.scss";

function CardItem({
  randomWord,
  buttonCardPressed,
  setButtonCardPressed,
  isEmpty,
  animationDirection,
  countStudiedWords,
  setCountStudiedWords,
  studiedWords,
  setStudiedWords,
}) {
  const handleIncrement = () => {
    if (!buttonCardPressed && !studiedWords.includes(randomWord.english)) {
      setCountStudiedWords(countStudiedWords + 1);
      setStudiedWords([...studiedWords, randomWord.english]);
    }
  };

  const checkButtonRef = useRef(null);

  useEffect(() => {
    if (checkButtonRef.current && randomWord) {
      checkButtonRef.current.focus();
    }
  }, [randomWord]);

  return (
    <>
      <div className={`cardContainer ${animationDirection ? `slide-${animationDirection}` : ""}`}>
        <div className="card">
          {isEmpty ? (
            <p className="cardWord">Список слов пуст или отсутствует</p>
          ) : randomWord ? (
            <>
              <p className="cardWord">{randomWord.english}</p>
              <p className="cardTranscription">{randomWord.transcription}</p>
              {buttonCardPressed ? (
                <p className="cardTranslation">{randomWord.russian}</p>
              ) : (
                <p className="cardTranslation" aria-hidden="true" style={{ visibility: "hidden" }}></p>
              )}
              <button
                ref={checkButtonRef}
                className="buttonCardCheckTranslation"
                onClick={() => {
                  setButtonCardPressed((prev) => !prev);
                  handleIncrement();
                }}
              >
                {buttonCardPressed ? "Назад" : "Проверить"}
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CardItem;
