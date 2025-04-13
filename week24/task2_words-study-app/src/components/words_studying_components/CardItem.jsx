import React, { useState } from "react";
import "../../styles/styles.scss";

function CardItem(props) {
  const [vocabulary] = useState(props.vocabulary || []);
  const [buttonCardPressed, setButtonCardPressed] = useState(false);

  let randomWordIndex = (vocabulary) => Math.floor(Math.random() * vocabulary.length);
  let randomWord = (vocabulary) => vocabulary[randomWordIndex];

  return (
    <div className="cardContainer" onClick={() => setButtonCardPressed(false)}>
      <div className="card">
        <p className="cardWord">{randomWord.english}</p>
        <p className="cardTranscription">{randomWord.transcription}</p>
        {buttonCardPressed ? (
          <p className="cardTranslation">{randomWord.russian}</p>
        ) : (
          <button
            className="buttonCardCheckTranslation"
            onClick={(e) => {
              e.stopPropagation();
              setButtonCardPressed(true);
            }}
          >
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}

export default CardItem;
