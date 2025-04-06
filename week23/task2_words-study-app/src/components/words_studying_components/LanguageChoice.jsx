import React from "react";
import "../../styles/styles.scss";

function LanguageChoice() {
  return (
    <React.Fragment>
      <section className="LanguageChoiceContainer">
        <button className="languageChoiceButton">Английский</button>
        <button className="languageChoiceButton">Немецкий</button>
        <button className="languageChoiceButton">Испанский</button>
        <button className="languageChoiceButton">Итальянский</button>
        <button className="languageChoiceButton">Французский</button>
        <button className="languageChoiceButton">Японский</button>
        <button className="languageChoiceButton">Китайский</button>
        <button className="languageChoiceButton">Латинский</button>
      </section>
    </React.Fragment>
  );
}

export default LanguageChoice;
