import React from "react";
import languagesList from "../../data/languages";
import { useWordsStore } from "../../data/WordsListProvider";
import "../../styles/styles.scss";

function LanguageChoice({ setChooseLanguage }) {
  const wordsStore = useWordsStore();
  const chosenLanguageWord = async (language) => {
    setChooseLanguage(language);

    if (language === "Английский") {
      try {
        await wordsStore.loadVocabulary(language);
      } catch (error) {
        console.error("Ошибка при загрузке списка слов: ", error);
        wordsStore.setWords([]);
      }
    } else {
      wordsStore.setWords([]);
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
