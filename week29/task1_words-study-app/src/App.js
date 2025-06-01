import "./styles/styles.scss";
import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { appRoutes } from "./appRoutes";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { FetchVocabularyEnglishContextProvider } from "./data/vocabularyEnglishContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main-content-container">
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
              <FetchVocabularyEnglishContextProvider>
                <Routes>
                  {appRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                  ))}
                </Routes>
              </FetchVocabularyEnglishContextProvider>
            </ErrorBoundary>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
