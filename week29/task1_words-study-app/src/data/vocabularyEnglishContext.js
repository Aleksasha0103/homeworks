import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../components/common/useLocalStorage";
import { useLocation } from "react-router-dom";

const FetchVocabularyEnglishContext = createContext();

function FetchVocabularyEnglishContextProvider({ children }) {
  const [vocabulary, setVocabulary] = useLocalStorage("vocabularyEnglish", []);
  const [chooseLanguage, setChooseLanguage] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const isOnWordsListEnglish = location.pathname === "/";
    if (chooseLanguage === "Английский" || isOnWordsListEnglish) {
      setLoading(true);
      async function fetchVocabularyEnglish() {
        try {
          const responseVocabularyEnglish = await fetch("https://itgirlschool.justmakeit.ru/api/words");
          if (!responseVocabularyEnglish.ok) {
            throw new Error(`Произошла ошибка подключения к серверу: ${responseVocabularyEnglish.status}`);
          }
          const dataVocabulary = await responseVocabularyEnglish.json();
          setVocabulary(dataVocabulary);
          setLoading(false);
        } catch (error) {
          console.error("Произошла ошибка подключения к серверу: ", error);
          setVocabulary([]);
        }
      }
      fetchVocabularyEnglish();
    } else {
      setVocabulary([]);
    }
  }, [chooseLanguage, location.pathname, setVocabulary]);

  useEffect(() => {
    if (location.pathname !== "/game") {
      setChooseLanguage(null);
      setVocabulary([]);
    }
  }, [location.pathname, setVocabulary]);

  return (
    <FetchVocabularyEnglishContext.Provider
      value={{ vocabulary, setVocabulary, chooseLanguage, setChooseLanguage, loading }}
    >
      {children}
    </FetchVocabularyEnglishContext.Provider>
  );
}

export { FetchVocabularyEnglishContextProvider, FetchVocabularyEnglishContext };
