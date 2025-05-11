import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import LanguageChoice from "../common/LanguageChoice";
import WordsHandlingButtons from "./WordsHandlingButtons";
import "../../styles/styles.scss";

function CardsContainer() {
  const [vocabulary, setVocabulary] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [buttonCardPressed, setButtonCardPressed] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [chooseLanguage, setChooseLanguage] = useState(null);
  const showCounter = chooseLanguage === "Английский" && vocabulary.length > 0;
  const makeButtonActive = vocabulary.length > 0;

  const isEmpty = chooseLanguage && vocabulary.length === 0;

  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === Math.max(vocabulary.length - 1, 0);

  const currentCard = vocabulary[currentCardIndex] || null;
  const arrayCounter = `${currentCardIndex + 1}/${vocabulary.length}`;

  const slideCardPrev = () => {
    if (!isFirstCard) {
      setAnimationDirection("right");
      setCurrentCardIndex((prev) => prev - 1);
      setButtonCardPressed(false);
    }
  };

  const slideCardNext = () => {
    if (!isLastCard) {
      setAnimationDirection("left");
      setCurrentCardIndex((prev) => prev + 1);
      setButtonCardPressed(false);
    }
  };

  useEffect(() => {
    if (animationDirection) {
      const timeout = setTimeout(() => setAnimationDirection(null), 300);
      return () => clearTimeout(timeout);
    }
  }, [animationDirection]);

  return (
    <>
      <LanguageChoice setVocabulary={setVocabulary} setChooseLanguage={setChooseLanguage} />
      <div className="commonCardsContainer">
        <div className="horizontalCommonCardsContainer">
          <button
            className={`prevCardButton ${makeButtonActive ? "activeButton" : ""} ${
              isFirstCard ? "inactiveButton" : ""
            }`}
            onClick={slideCardPrev}
          ></button>
          <div className="animationContainer">
            <CardItem
              randomWord={currentCard}
              buttonCardPressed={buttonCardPressed}
              setButtonCardPressed={setButtonCardPressed}
              animationDirection={animationDirection}
              isEmpty={isEmpty}
            />
          </div>
          <button
            className={`nextCardButton ${makeButtonActive ? "activeButton" : ""} ${isLastCard ? "inactiveButton" : ""}`}
            onClick={slideCardNext}
          ></button>
        </div>
        {showCounter ? <div className="arrayCounter">{arrayCounter}</div> : <div className="arrayCounter"></div>}
      </div>
      <WordsHandlingButtons />
    </>
  );
}

export default CardsContainer;
