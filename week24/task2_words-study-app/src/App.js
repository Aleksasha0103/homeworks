import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import LanguageChoice from "./components/common/LanguageChoice";
import WordsCardAndButtons from "./components/cardComponents/WordsCardAndButtons";
import Footer from "./components/common/Footer";
import WordsListEnglish from "./components/listComponents/WordsListEnglish";
import { fetchVocabularyEnglish } from "./data/vocabularyEnglish";
import "./styles/styles.scss";

function App() {
  const [chooseLanguage, setChooseLanguage] = useState(null);
  const [vocabulary, setVocabulary] = useState([]);
  const [randomWord, setRandomWord] = useState(null);
  const [buttonCardPressed, setButtonCardPressed] = useState(false);

  const loadVocabularyData = async (language) => {
    if (language === "Английский") {
      const vocabularyData = await fetchVocabularyEnglish();
      setVocabulary(vocabularyData);
    } else {
      setVocabulary([]);
    }
  };

  useEffect(() => {
    if (chooseLanguage) {
      loadVocabularyData(chooseLanguage);
    }
  }, [chooseLanguage]);

  const chosenLanguageWord = (language) => {
    setChooseLanguage(language);
    setRandomWord(null);
    setButtonCardPressed(false);
  };

  useEffect(() => {
    const getRandomWord = () => {
      if (vocabulary.length > 0) {
        const randomWordIndex = Math.floor(Math.random() * vocabulary.length);
        setRandomWord(vocabulary[randomWordIndex]);
      } else {
        setRandomWord(null);
      }
    };
    getRandomWord();
  }, [vocabulary]);

  return (
    <Router>
      <div className="App">
        <Header />
        <LanguageChoice chooseLanguage={chosenLanguageWord} />
        <Routes>
          <Route
            path="/"
            element={
              <WordsCardAndButtons
                randomWord={randomWord}
                buttonCardPressed={buttonCardPressed}
                setButtonCardPressed={setButtonCardPressed}
                chooseLanguage={chooseLanguage}
                vocabulary={vocabulary}
              />
            }
          />
          <Route path="/WordsList" element={<WordsListEnglish />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
