import React from "react";
import CardItem from "./CardItem";
import LanguageCardButtons from "./LanguageCardButtons";
import "../../styles/styles.scss";

function WordsCardAndButtons({ randomWord, buttonCardPressed, setButtonCardPressed, languageChousen, vocabulary }) {
  return (
    <section className="WordsCardAndButtons">
      <CardItem
        randomWord={randomWord}
        buttonCardPressed={buttonCardPressed}
        setButtonCardPressed={setButtonCardPressed}
        languageChousen={languageChousen}
        vocabulary={vocabulary}
      />
      <LanguageCardButtons />
    </section>
  );
}

export default WordsCardAndButtons;
