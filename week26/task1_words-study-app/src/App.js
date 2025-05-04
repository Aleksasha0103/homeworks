import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WordsListElglish from "./components/listComponents/WordsListEnglish";
import CardsContainer from "./components/cardComponents/CardsContainer";
import Error404 from "./components/common/Error404";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main-content-container">
          <Routes>
            <Route path="/" element={<WordsListElglish />} />
            <Route path="/game" element={<CardsContainer />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
