import React, { useEffect, useRef } from "react";
import { useWordsStore } from "../../data/WordsListProvider";
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
  language,
}) {
  const checkButtonRef = useRef(null);
  const { wordsCollection } = useWordsStore();

  useEffect(() => {
    if (checkButtonRef.current && randomWord) {
      checkButtonRef.current.focus();
    }
  }, [randomWord]);

  const handleIncrement = () => {
    if (!randomWord) return;
    if (!buttonCardPressed) {
      setButtonCardPressed(true);

      if (!studiedWords.includes(randomWord.english)) {
        setStudiedWords((prevStudiedWords) => [...prevStudiedWords, randomWord.english]);
        setCountStudiedWords((prevCount) => prevCount + 1);
      }
    } else {
      setButtonCardPressed(false);
    }
  };

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
              <button ref={checkButtonRef} className="buttonCardCheckTranslation" onClick={handleIncrement}>
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
