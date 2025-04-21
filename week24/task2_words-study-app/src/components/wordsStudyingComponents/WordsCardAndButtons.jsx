import React from "react";
import CardItem from "./CardItem";
import LanguageCardButtons from "./LanguageCardButtons";
import "../../styles/styles.scss";

function WordsCardAndButtons() {
  return (
    <section className="WordsCardAndButtons">
      <CardItem />
      <LanguageCardButtons />
    </section>
  );
}

export default WordsCardAndButtons;
