import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/generalComponents/Header";
import LanguageChoice from "./components/wordsStudyingComponents/LanguageChoice";
import WordsCardAndButtons from "./components/wordsStudyingComponents/WordsCardAndButtons";
import Footer from "./components/generalComponents/Footer";
import WordsList from "./components/wordsStudyingComponents/WordsList";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <LanguageChoice />
        <Routes>
          <Route path="/" element={<WordsCardAndButtons />} />
          <Route path="/WordsList" element={<WordsList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
