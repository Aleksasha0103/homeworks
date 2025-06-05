import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useWordsStore } from "../../data/WordsListProvider";
import "../../styles/styles.scss";

const WordsListEnglish = observer(() => {
  const wordsStore = useWordsStore();
  const vocabulary = wordsStore.wordsCollection;
  const [editingIndex, setEditingIndex] = useState(null);
  const [newWord, setNewWord] = useState({ english: "", transcription: "", russian: "", tags: "" });
  const nextId = vocabulary.length + 1;

  //Редактирование строки (при клике по кнопке)
  const handleEditing = (index) => {
    setEditingIndex(index);
  };

  //Изменение данных в инпуте (ввод)
  const handleInputChange = (index, field, value) => {
    const updatedWord = { ...vocabulary[index], [field]: value };
    wordsStore.updateWordInCollection(index, updatedWord);
  };

  //Сохранение обновлённого инпута (update)
  const handleSaving = (index) => {
    setEditingIndex(null);
  };

  //Удаление строки со словом
  const handleDeleting = (index) => {
    wordsStore.deleteWordFromCollection(index);
  };

  //Добавление нового слова
  const handleAddingNewWord = () => {
    const newWordWithId = { id: nextId, ...newWord };
    wordsStore.addWordToCollection(newWordWithId);
    setNewWord({ english: "", transcription: "", russian: "", tags: "" });
    setEditingIndex(null);
  };

  const isNewWordEmpty =
    editingIndex === nextId &&
    (newWord.english.trim() === "" ||
      newWord.transcription.trim() === "" ||
      newWord.russian.trim() === "" ||
      newWord.tags.trim() === "");

  const isNewEnglishValid = newWord.english.trim() !== "" && /^[A-Za-z\-\s]+$/.test(newWord.english);
  const isNewTranscriptionValid =
    newWord.transcription.trim() !== "" && /^\[[A-Za-z:ː.'ˈðθʧʤʒʃɪɔɑaʌæəɛɜʊŋɡ\s]+\]$/.test(newWord.transcription);
  const isNewRussianValid = newWord.russian.trim() !== "" && /^[А-Яа-яЁё\-\s]+$/.test(newWord.russian);
  const isNewTagsValid = newWord.tags.trim() !== "" && /^[A-Za-z\s,]+$/.test(newWord.tags);

  const showAlert = () => {
    alert("Введены недопустимые символы");
  };

  return (
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
          {vocabulary.map((row, index) => {
            const isEmptyInput =
              editingIndex === index &&
              (row.english.trim() === "" ||
                row.transcription.trim() === "" ||
                row.russian.trim() === "" ||
                row.tags.trim() === "");
            const isEditEnglishValid = row.english.trim() !== "" && /^[A-Za-z\-\s]+$/.test(row.english);
            const isEditTranscriptionValid =
              row.transcription.trim() !== "" && /^\[[A-Za-z:ː.'ˈðθʧʤʒʃɪɔɑaʌæəɛɜʊŋɪɡ\s]+\]$/.test(row.transcription);
            const isEditRussianValid = row.russian.trim() !== "" && /^[А-Яа-яЁё\-\s]+$/.test(row.russian);
            const isEditTagsValid = row.tags.trim() !== "" && /^[A-Za-z\s,]+$/.test(row.tags);
            return (
              <tr key={row.id} className={editingIndex === index ? "rosy" : "white"}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    required
                    disabled={editingIndex !== index}
                    value={row.english.toLowerCase()}
                    className={editingIndex === index && row.english.trim() === "" ? "emptyInput" : ""}
                    onChange={(e) => handleInputChange(index, "english", e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    disabled={editingIndex !== index}
                    value={row.transcription}
                    className={editingIndex === index && row.transcription.trim() === "" ? "emptyInput" : ""}
                    onChange={(e) => handleInputChange(index, "transcription", e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    disabled={editingIndex !== index}
                    value={row.russian.toLowerCase()}
                    className={editingIndex === index && row.russian.trim() === "" ? "emptyInput" : ""}
                    onChange={(e) => handleInputChange(index, "russian", e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    disabled={editingIndex !== index}
                    value={row.tags.toLowerCase()}
                    className={editingIndex === index && row.tags.trim() === "" ? "emptyInput" : ""}
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
                      <button className="buttonCancel" onClick={() => setEditingIndex(null)}>
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
          <tr key={nextId} className={editingIndex === nextId ? "rosy" : "white"}>
            <td>{nextId}</td>
            <td>
              <input
                type="text"
                required
                disabled={editingIndex !== nextId}
                value={newWord.english}
                className={editingIndex === nextId && newWord.english.trim() === "" ? "emptyInput" : ""}
                onChange={(e) => setNewWord({ ...newWord, english: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                required
                disabled={editingIndex !== nextId}
                value={newWord.transcription}
                className={editingIndex === nextId && newWord.transcription.trim() === "" ? "emptyInput" : ""}
                onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                required
                disabled={editingIndex !== nextId}
                value={newWord.russian}
                className={editingIndex === nextId && newWord.russian.trim() === "" ? "emptyInput" : ""}
                onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                required
                disabled={editingIndex !== nextId}
                value={newWord.tags.toLowerCase()}
                className={editingIndex === nextId && newWord.tags.trim() === "" ? "emptyInput" : ""}
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
});

export default WordsListEnglish;
