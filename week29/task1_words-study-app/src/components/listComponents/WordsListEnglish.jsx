import React, { useContext, useEffect, useState } from "react";
import "../../styles/styles.scss";
import { FetchVocabularyEnglishContext } from "../../data/vocabularyEnglishContext";

function WordsListEnglish() {
  const { vocabulary, setVocabulary, loading } = useContext(FetchVocabularyEnglishContext);
  const [vocabularyList, setVocabularyList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newWord, setNewWord] = useState({ english: "", transcription: "", russian: "", tags: "" });
  useEffect(() => {
    if (Array.isArray(vocabulary)) {
      setVocabularyList(vocabulary);
    }
  }, [vocabulary]);

  useEffect(() => {
    localStorage.setItem("vocabularyEnglish", JSON.stringify(vocabularyList));
  }, [vocabularyList]);

  const nextId = vocabularyList.length;

  //Редактирование строки (при клике по кнопке)
  const handleEditing = (index) => {
    setEditingIndex(index);
  };

  //Изменение данных в инпуте (ввод)
  const handleInputChange = (index, field, value) => {
    const updatedInput = [...vocabularyList];
    updatedInput[index][field] = value;
    setVocabularyList(updatedInput);
  };

  //Отправка на сервер при сохранении:
  const saveAtServer = async (word) => {
    try {
      const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(word),
      });
      if (!response.ok) {
        throw new Error("Произошла ошибка при сохранении данных на сервер");
      }

      const responseJson = await response.json();
      const savedWord = responseJson?.data ?? responseJson;
      if (!savedWord.id || !savedWord.id) {
        alert("Произошла ошибка: сервер не вернул id нового слова");
        return null;
      }
      return savedWord;
    } catch (error) {
      alert("Произошла ошибка при сохранении данных на сервер: " + error.message);
      return null;
    }
  };

  //Отправка на сервер при редактировании:
  const updateAtServer = async (word) => {
    try {
      const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(word),
      });

      if (!response.ok) {
        throw new Error("Произошла ошибка при редактировании данных на сервере");
      }

      const updatedWord = await response.json();
      return updatedWord;
    } catch (error) {
      alert("Произошла ошибка при редактировании данных на сервере: " + error.message);
      return null;
    }
  };

  //Удаление на сервере:
  const deleteAtServer = async (id) => {
    try {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      alert("Произошла ошибка при удалении данных на сервере: " + error.message);
    }
  };

  //Сохранение обновлённого инпута (update)
  const handleSaving = async (index) => {
    const updatedInput = [...vocabularyList];
    const copyUpdatedInput = { ...vocabularyList[index] };
    await updateAtServer(copyUpdatedInput);
    setVocabularyList(updatedInput);
    setVocabulary(updatedInput);
    setEditingIndex(null);
  };

  //Удаление строки со словом
  const handleDeleting = async (index) => {
    const wordToDelete = vocabularyList[index];
    if (!wordToDelete) return;
    await deleteAtServer(wordToDelete.id);
    const updatedVocabulary = [...vocabularyList];
    updatedVocabulary.splice(index, 1);
    setVocabularyList(updatedVocabulary);
    setVocabulary(updatedVocabulary);
  };

  //Добавление нового слова
  const handleAddingNewWord = async () => {
    const wordToAdd = { ...newWord };
    const savedWord = await saveAtServer(wordToAdd);
    if (!savedWord) return;
    const updatedEnglishList = [...vocabularyList, savedWord];
    setVocabularyList(updatedEnglishList);
    setVocabulary(updatedEnglishList);
    setNewWord({ english: "", transcription: "", russian: "", tags: "" });
    setEditingIndex(null);
  };

  const isNewWordEmpty =
    editingIndex === nextId &&
    ((newWord.english ?? "").trim() === "" ||
      (newWord.transcription ?? "").trim() === "" ||
      (newWord.russian ?? "").trim() === "" ||
      (newWord.tags ?? "").trim() === "");

  const isNewEnglishValid = (newWord.english ?? "").trim() !== "" && /^[A-Za-z\-\s]+$/.test(newWord.english);
  const isNewTranscriptionValid =
    (newWord.transcription ?? "").trim() !== "" &&
    /^\[[A-Za-z:ː.'ˈðθʧʤʒʃɪɔɑaʌæəɛɜʊŋɡ\s]+\]$/.test(newWord.transcription);
  const isNewRussianValid = (newWord.russian ?? "").trim() !== "" && /^[А-Яа-яЁё\-\s]+$/.test(newWord.russian);
  const isNewTagsValid = (newWord.tags ?? "").trim() !== "" && /^[A-Za-z\s,]+$/.test(newWord.tags);

  const showAlert = () => {
    alert("Введены недопустимые символы");
  };

  return loading ? (
    <p className="cardWord">Идёт загрузка данных, пожалуйста, подождите</p>
  ) : (
    <section className="wordsList">
      <table className="wordsListTable">
        <thead>
          <tr>
            <th>№</th>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Теги</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vocabularyList.map((row, index) => {
            const isEmptyInput =
              editingIndex === index &&
              ((row.english ?? "").trim() === "" ||
                (row.transcription ?? "").trim() === "" ||
                (row.russian ?? "").trim() === "" ||
                (row.tags ?? "").trim() === "");
            const isEditEnglishValid = (row.english ?? "").trim() !== "" && /^[A-Za-z\-\s]+$/.test(row.english);
            const isEditTranscriptionValid =
              (row.transcription ?? "").trim() !== "" &&
              /^\[[A-Za-z:ː.'ˈðθʧʤʒʃɪɔɑaʌæəɛɜʊŋɪɡ\s]+\]$/.test(row.transcription);
            const isEditRussianValid = (row.russian ?? "").trim() !== "" && /^[А-Яа-яЁё\-\s]+$/.test(row.russian);
            const isEditTagsValid = (row.tags ?? "").trim() !== "" && /^[A-Za-z\s,]+$/.test(row.tags);
            return (
              <tr key={row.id ?? `temp-id-${index}`} className={editingIndex === index ? "rosy" : "white"}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    required
                    disabled={editingIndex !== index}
                    value={(row.english ?? "").toLowerCase()}
                    className={editingIndex === index && (row.english ?? "").trim() === "" ? "emptyInput" : ""}
                    onChange={(e) => handleInputChange(index, "english", e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    disabled={editingIndex !== index}
                    value={row.transcription}
                    className={editingIndex === index && (row.transcription ?? "").trim() === "" ? "emptyInput" : ""}
                    onChange={(e) => handleInputChange(index, "transcription", e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    disabled={editingIndex !== index}
                    value={(row.russian ?? "").toLowerCase()}
                    className={editingIndex === index && (row.russian ?? "").trim() === "" ? "emptyInput" : ""}
                    onChange={(e) => handleInputChange(index, "russian", e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    disabled={editingIndex !== index}
                    value={(row.tags ?? "").toLowerCase()}
                    className={editingIndex === index && (row.tags ?? "").trim() === "" ? "emptyInput" : ""}
                    onChange={(e) => handleInputChange(index, "tags", e.target.value)}
                  ></input>
                </td>
                <td>
                  {editingIndex === index ? (
                    <React.Fragment>
                      <button
                        className={isEmptyInput ? "buttonSaveInactive" : "buttonSave"}
                        onClick={() => {
                          if (isEmptyInput) {
                            return;
                          }
                          if (
                            !isEditEnglishValid ||
                            !isEditTranscriptionValid ||
                            !isEditRussianValid ||
                            !isEditTagsValid
                          ) {
                            showAlert();
                            return;
                          }
                          handleSaving(index);
                          console.log(row.english, row.transcription, row.russian, row.tags);
                        }}
                        disabled={isEmptyInput}
                      >
                        Сохранить
                      </button>
                      <button
                        className="buttonCancel"
                        onClick={() => {
                          setEditingIndex(null);
                          setNewWord({ english: "", transcription: "", russian: "", tags: "" });
                        }}
                      >
                        Отмена
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button className="buttonEdit" onClick={() => handleEditing(index)}></button>
                      <button className="buttonDelete" onClick={() => handleDeleting(index)}></button>
                    </React.Fragment>
                  )}
                </td>
              </tr>
            );
          })}
          <tr key="newWordRow" className={editingIndex === nextId ? "rosy" : "white"}>
            <td>{vocabularyList.length + 1}</td>
            <td>
              <input
                type="text"
                required
                disabled={editingIndex !== nextId}
                value={newWord.english}
                className={editingIndex === nextId && (newWord.english ?? "").trim() === "" ? "emptyInput" : ""}
                onChange={(e) => setNewWord({ ...newWord, english: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                required
                disabled={editingIndex !== nextId}
                value={newWord.transcription}
                className={editingIndex === nextId && (newWord.transcription ?? "").trim() === "" ? "emptyInput" : ""}
                onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                required
                disabled={editingIndex !== nextId}
                value={newWord.russian}
                className={editingIndex === nextId && (newWord.russian ?? "").trim() === "" ? "emptyInput" : ""}
                onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                required
                disabled={editingIndex !== nextId}
                value={(newWord.tags ?? "").toLowerCase()}
                className={editingIndex === nextId && (newWord.tags ?? "").trim() === "" ? "emptyInput" : ""}
                onChange={(e) => setNewWord({ ...newWord, tags: e.target.value })}
              ></input>
            </td>
            <td>
              {editingIndex === nextId ? (
                <React.Fragment>
                  <button
                    className={isNewWordEmpty ? "buttonSaveInactive" : "buttonSave"}
                    onClick={() => {
                      if (isNewWordEmpty) {
                        return;
                      }
                      if (!isNewEnglishValid || !isNewTranscriptionValid || !isNewRussianValid || !isNewTagsValid) {
                        showAlert();
                        return;
                      }
                      const wordToAdd = { ...newWord };
                      handleAddingNewWord();
                      console.log(newWord.english, newWord.transcription, newWord.russian, newWord.tags);
                    }}
                    disabled={isNewWordEmpty}
                  >
                    Сохранить
                  </button>
                  <button className="buttonCancel" onClick={() => setEditingIndex(null)}>
                    Отмена
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <button
                    className="buttonAddNewWord"
                    onClick={() => {
                      if (editingIndex !== nextId) {
                        setEditingIndex(nextId);
                      }
                    }}
                  >
                    Добавить
                  </button>
                </React.Fragment>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default WordsListEnglish;
