import React from "react";
import languagesList from "../../data/languages";
import "../../styles/styles.scss";

function LanguageChoice() {
  return (
    <React.Fragment>
      <section className="LanguageChoiceContainer">
        {languagesList.map((language, index) => (
          <button key={index} className="languageChoiceButton">
            {language}
          </button>
        ))}
      </section>
    </React.Fragment>
  );
}

export default LanguageChoice;
