import React from "react";
import languagesList from "../../data/languages";
import "../../styles/styles.scss";

function LanguageChoice({ chooseLanguage }) {
  return (
    <section className="LanguageChoiceContainer">
      {languagesList.map(({ id, name }) => (
        <button key={id} className="languageChoiceButton" onClick={() => chooseLanguage(name)}>
          {name}
        </button>
      ))}
    </section>
  );
}

export default LanguageChoice;
