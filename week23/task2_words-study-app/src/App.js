import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/general_components/Header";
import LanguageChoice from "./components/words_studying_components/LanguageChoice";
import WordsCardAndButtons from "./components/words_studying_components/WordsCardAndButtons";
import Footer from "./components/general_components/Footer";
import WordsList from "./components/words_studying_components/WordsList";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <LanguageChoice />
        <Routes>
          <Route path="/" element={<WordsCardAndButtons />} />
          <Route path="/words-list" element={<WordsList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
