import React from "react";
import CardItem from "./CardItem";
import LanguageCardButtons from "./LanguageCardButtons";
import "../../styles/styles.scss";

function WordsCardAndButtons() {
  return (
    <React.Fragment>
      <section className="WordsCardAndButtons">
        <CardItem />
        <LanguageCardButtons />
      </section>
    </React.Fragment>
  );
}

export default WordsCardAndButtons;
