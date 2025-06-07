import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { action, runInAction } from "mobx";

const WordsContext = createContext(null);

export const useWordsStore = () => {
  const context = useContext(WordsContext);
  if (!context) throw new Error("WordsContext not found");
  return context;
};

const WordsListProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    vocabularyEnglish: [],

    loadVocabulary: action(async function (language) {
      if (language !== "Английский") {
        this.vocabularyEnglish = [];
        return;
      }
      try {
        const responseVocabularyEnglish = await fetch("https://itgirlschool.justmakeit.ru/api/words");
        if (!responseVocabularyEnglish.ok) {
          throw new Error(`Произошла ошибка подключения к серверу: ${responseVocabularyEnglish.status}`);
        }
        const dataVocabulary = await responseVocabularyEnglish.json();
        runInAction(() => {
          this.vocabularyEnglish = dataVocabulary;
          localStorage.setItem("words_local", JSON.stringify(dataVocabulary));
        });
      } catch (error) {
        const savedWords = localStorage.getItem("words_local");
        if (savedWords) {
          runInAction(() => {
            this.vocabularyEnglish = JSON.parse(savedWords);
          });
        } else {
          alert("Не удалось загрузить данные");
        }
      }
    }),

    setWords: action(function (words) {
      this.vocabularyEnglish = words;
    }),

    addWordToCollection: action(async function (word) {
      try {
        const response = await fetch("https://itgirlschool.justmakeit.ru/api/words", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(word),
        });
        if (!response.ok) {
          throw new Error(`Ошибка сохранения: ${response.status}`);
        }
        const newWord = await response.json();

        if (!newWord.id) {
          alert("Сервер не вернул id");
          return;
        }

        runInAction(() => {
          this.vocabularyEnglish.push(newWord);
          localStorage.setItem("words_local", JSON.stringify(this.vocabularyEnglish));
        });
      } catch (error) {
        alert(`Не удалось сохранить слово: ${error.message}`);
      }
    }),

    updateWordInCollection: action(async function (index, updateWord) {
      const oldWord = this.vocabularyEnglish[index];
      if (!oldWord || !oldWord.id) return;

      try {
        const response = await fetch(`https://itgirlschool.justmakeit.ru/api/words/${oldWord.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateWord),
        });

        if (!response.ok) {
          alert("Ошибка при обновлении");
          return;
        }

        runInAction(() => {
          this.vocabularyEnglish[index] = updateWord;
          localStorage.setItem("words_local", JSON.stringify(this.vocabularyEnglish));
        });
      } catch (error) {
        alert(`Не удалось обновить слово: ${error.message}`);
      }
    }),

    deleteWordFromCollection: action(async function (index) {
      const deletedWord = this.vocabularyEnglish[index];
      if (!deletedWord || !deletedWord.id) return;

      try {
        const response = await fetch(`https://itgirlschool.justmakeit.ru/api/words/${deletedWord.id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          alert("Ошибка при удалении");
          return;
        }

        runInAction(() => {
          this.vocabularyEnglish.splice(index, 1);
          localStorage.setItem("words_local", JSON.stringify(this.vocabularyEnglish));
        });
      } catch (error) {
        alert(`Не удалось удалить слово: ${error.message}`);
      }
    }),

    get wordsCollection() {
      return this.vocabularyEnglish;
    },
  }));

  return <WordsContext.Provider value={store}>{children}</WordsContext.Provider>;
};

export default WordsListProvider;
