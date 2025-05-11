import React from "react";
import "../../styles/styles.scss";

function CardItem({ randomWord, buttonCardPressed, setButtonCardPressed, isEmpty, animationDirection }) {
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
              <button className="buttonCardCheckTranslation" onClick={() => setButtonCardPressed((prev) => !prev)}>
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
