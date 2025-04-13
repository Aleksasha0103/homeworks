import { useEffect } from "react";
import { fetchVocabulary } from "../../data/vocabulary";
import "../../styles/styles.scss";

//Получение данных из json
function VocabularyHandling({ setVocabulary }) {
  useEffect(() => {
    const vocabularyInitial = async () => {
      const vocabularyData = await fetchVocabulary();
      setVocabulary(vocabularyData);
    };

    vocabularyInitial();
  }, [setVocabulary]);
  return null;
}

export default VocabularyHandling;
