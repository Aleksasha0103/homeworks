import React, { useContext } from "react";
import languagesList from "../../data/languages";
import { FetchVocabularyEnglishContext } from "../../data/vocabularyEnglishContext";
import "../../styles/styles.scss";

function LanguageChoice({ setVocabulary, setChooseLanguage }) {
  const { fetchVocabularyEnglish } = useContext(FetchVocabularyEnglishContext);
  const chosenLanguageWord = async (language) => {
    setChooseLanguage(language);

    if (language === "Английский") {
      try {
        const englishVocabulary = await fetchVocabularyEnglish();
        setVocabulary(englishVocabulary);
      } catch (error) {
        console.error("Failed to load vocabulary: ", error);
        setVocabulary([]);
      }
    } else {
      setVocabulary([]);
    }
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
