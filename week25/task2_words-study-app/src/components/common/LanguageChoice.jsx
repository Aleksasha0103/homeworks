import React from "react";
import languagesList from "../../data/languages";
import "../../styles/styles.scss";

function LanguageChoice({ setChooseLanguage }) {
  const chosenLanguageWord = (language) => {
    setChooseLanguage(language);
  };

  return (
    <section className="LanguageChoiceContainer">
      {languagesList.map(({ id, name }) => (
        <button key={id} className="languageChoiceButton" onClick={() => chosenLanguageWord(name)}>
          {name}
        </button>
      ))}
    </section>
  );
}

export default LanguageChoice;
