import React from "react";
import languagesList from "../../data/languages";
import "../../styles/styles.scss";

function LanguageChoice() {
  return (
    <section className="LanguageChoiceContainer">
      {languagesList.map(({ id, name }) => (
        <button key={id} className="languageChoiceButton">
          {name}
        </button>
      ))}
    </section>
  );
}

export default LanguageChoice;
