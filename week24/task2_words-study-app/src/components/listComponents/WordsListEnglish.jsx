import React, { useState } from "react";
import "../../styles/styles.scss";
import VocabularyHandling from "../cardComponents/VocabularyHandling";

function WordsList() {
  const [vocabulary, setVocabulary] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newWord, setNewWord] = useState({ english: "", transcription: "", russian: "", tags: "" });
  const nextId = vocabulary.length + 1;

  //Редактирование строки (при клике по кнопке)
  const handleEditing = (index) => {
    setEditingIndex(index);
  };

  //Изменение данных в инпуте (ввод)
  const handleInputChange = (index, field, value) => {
    const updatedInput = [...vocabulary];
    updatedInput[index][field] = value;
    setVocabulary(updatedInput);
  };

  //Сохранение обновлённого инпута (update)
  const handleSaving = (index, field, value) => {
    const updatedInput = [...vocabulary];
    updatedInput[index][field] = value;
    setEditingIndex(null);
  };

  //Удаление строки со словом
  const handleDeleting = (index) => {
    const updatedVocabulary = [...vocabulary];
    updatedVocabulary.splice(index, 1);
    setVocabulary(updatedVocabulary);
  };

  //Добавление нового слова
  const handleAddingNewWord = () => {
    setVocabulary([...vocabulary, { id: nextId, ...newWord }]);
    setNewWord({ english: "", transcription: "", russian: "", tags: "" });
  };

  return (
    <section className="wordsList">
      <VocabularyHandling setVocabulary={setVocabulary} />
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
          {vocabulary.map((row, index) => (
            <tr key={row.id} className={editingIndex === index ? "rosy" : "white"}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  disabled={editingIndex !== index}
                  value={row.english.toLowerCase()}
                  onChange={(e) => handleInputChange(index, "english", e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  disabled={editingIndex !== index}
                  value={row.transcription}
                  onChange={(e) => handleInputChange(index, "transcription", e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  disabled={editingIndex !== index}
                  value={row.russian.toLowerCase()}
                  onChange={(e) => handleInputChange(index, "russian", e.target.value)}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  disabled={editingIndex !== index}
                  value={row.tags.toLowerCase()}
                  onChange={(e) => handleInputChange(index, "tags", e.target.value)}
                ></input>
              </td>
              <td>
                {editingIndex === index ? (
                  <React.Fragment>
                    <button className="buttonSave" onClick={() => handleSaving(index)}>
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
          ))}
          <tr key={nextId} className={editingIndex === nextId ? "rosy" : "white"}>
            <td>{vocabulary.length + 1}</td>
            <td>
              <input
                type="text"
                disabled={editingIndex !== nextId}
                value={newWord.english}
                onChange={(e) => setNewWord({ ...newWord, english: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                disabled={editingIndex !== nextId}
                value={newWord.transcription}
                onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                disabled={editingIndex !== nextId}
                value={newWord.russian}
                onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })}
              ></input>
            </td>
            <td>
              <input
                type="text"
                disabled={editingIndex !== nextId}
                value={newWord.tags.toLowerCase()}
                onChange={(e) => setNewWord({ ...newWord, tags: e.target.value })}
              ></input>
            </td>
            <td>
              {editingIndex === nextId ? (
                <React.Fragment>
                  <button className="buttonSave" onClick={() => handleSaving(nextId)}>
                    Сохранить
                  </button>
                  <button className="buttonCancel" onClick={() => setEditingIndex(null)}>
                    Отмена
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <button className="buttonAddNewWord" onClick={() => handleAddingNewWord(nextId)}>
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

export default WordsList;
