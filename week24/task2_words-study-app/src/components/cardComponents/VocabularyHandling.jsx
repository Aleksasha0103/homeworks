import { useEffect } from "react";
import { fetchVocabularyEnglish } from "../../data/vocabularyEnglish";
import "../../styles/styles.scss";

//Получение данных из json
function VocabularyHandling({ setVocabulary }) {
  useEffect(() => {
    const vocabularyInitial = async () => {
      const vocabularyData = await fetchVocabularyEnglish();
      setVocabulary(vocabularyData);
    };

    vocabularyInitial();
  }, [setVocabulary]);
  return null;
}

export default VocabularyHandling;
