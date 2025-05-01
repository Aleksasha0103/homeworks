import React, { useState, useEffect } from "react";
import { fetchVocabularyEnglish } from "../../data/vocabularyEnglish";
import CardItem from "../cardComponents/CardItem";
import "../../styles/styles.scss";

function CardsContainer({ chooseLanguage }) {
  const [vocabulary, setVocabulary] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [buttonCardPressed, setButtonCardPressed] = useState(false);
  const [showCounter, setShowCounter] = useState(false);
  const [makeButtonActive, setMakeButtonActive] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(null);

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
    const loadVocabularyData = async (language) => {
      if (language === "Английский") {
        const vocabularyData = await fetchVocabularyEnglish();
        setVocabulary(vocabularyData);
        setCurrentCardIndex(0);
        setShowCounter(true);
        setMakeButtonActive(true);
      } else {
        setVocabulary([]);
        setCurrentCardIndex(0);
        setShowCounter(false);
      }
    };

    if (chooseLanguage) {
      loadVocabularyData(chooseLanguage);
    }
  }, [chooseLanguage]);

  useEffect(() => {
    if (animationDirection) {
      const timeout = setTimeout(() => setAnimationDirection(null), 300);
      return () => clearTimeout(timeout);
    }
  }, [animationDirection]);

  return (
    <div className="commonCardsContainer">
      <div className="horizontalCommonCardsContainer">
        <div className="horizontalCommonCardsContainer">
          <button
            className={`prevCardButton ${makeButtonActive ? "activeButton" : ""} ${
              isFirstCard ? "inactiveButton" : ""
            }`}
            onClick={slideCardPrev}
          ></button>
        </div>
        <div className={`animationContainer slide-${animationDirection}`}>
          <CardItem
            randomWord={currentCard}
            buttonCardPressed={buttonCardPressed}
            setButtonCardPressed={setButtonCardPressed}
            vocabulary={vocabulary}
            chooseLanguage={chooseLanguage}
          />
        </div>
        <div className="horizontalCommonCardsContainer">
          <button
            className={`nextCardButton ${makeButtonActive ? "activeButton" : ""} ${isLastCard ? "inactiveButton" : ""}`}
            onClick={slideCardNext}
          ></button>
        </div>
      </div>
      {showCounter ? <div className="arrayCounter">{arrayCounter}</div> : <div className="arrayCounter"></div>}
    </div>
  );
}

export default CardsContainer;
