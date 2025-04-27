import "../../styles/styles.scss";

function CardItem({ randomWord, buttonCardPressed, setButtonCardPressed, chooseLanguage, vocabulary }) {
  return (
    <div className="cardContainer">
      <div className="card">
        {chooseLanguage && vocabulary.length === 0 ? (
          <p className="cardWord">Список слов пуст или отсутствует</p>
        ) : randomWord ? (
          <>
            <p className="cardWord">{randomWord.english}</p>
            <p className="cardTranscription">{randomWord.transcription}</p>
            {buttonCardPressed ? (
              <p className="cardTranslation">{randomWord.russian}</p>
            ) : (
              <p className="cardTranslation"></p>
            )}
            <button className="buttonCardCheckTranslation" onClick={() => setButtonCardPressed((prev) => !prev)}>
              {buttonCardPressed ? "Назад" : "Проверить"}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default CardItem;
