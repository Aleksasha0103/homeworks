import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LanguageChoice from "./components/common/LanguageChoice";
import CardsContainer from "./components/common/CardsContainer";
import WordsHandlingButtons from "./components/cardComponents/WordsHandlingButtons";
import "./styles/styles.scss";

function App() {
  const [chooseLanguage, setChooseLanguage] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <LanguageChoice setChooseLanguage={setChooseLanguage} />
        <CardsContainer chooseLanguage={chooseLanguage} />
        <WordsHandlingButtons />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
