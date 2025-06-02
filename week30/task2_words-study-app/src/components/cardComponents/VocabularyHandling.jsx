import { useEffect } from "react";
import { fetchVocabularyEnglish } from "../../data/vocabularyEnglish";
import "../../styles/styles.scss";

//Получение данных из json
function VocabularyHandling({ setVocabulary }) {
  useEffect(() => {
    const vocabularyInitial = async () => {
      try {
        const vocabularyData = await fetchVocabularyEnglish();
        setVocabulary(vocabularyData);
      } catch (error) {
        console.error("Failed to load vocabulary: ", error);
        setVocabulary([]);
      }
    };

    vocabularyInitial();
  }, [setVocabulary]);
  return null;
}

export default VocabularyHandling;
