import React, { useEffect, useState } from "react";
import "../../styles/styles.scss";
import { fetchVocabulary } from "../../data/vocabulary";

function WordsList() {
  const [vocabulary, setVocabulary] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  //Получение данных из json
  useEffect(() => {
    const vocabularyInitial = async () => {
      const vocabularyData = await fetchVocabulary();
      setVocabulary(vocabularyData);
    };

    vocabularyInitial();
  }, []);

  //Редактирование строки (при клике по кнопке)
  const handleEditing = (index) => {
    setEditingIndex(index);
  };

  //Изменение инпута (update)
  const handleInputChange = (index, field, value) => {
    const updatedInput = [...vocabulary];
    updatedInput[index][field] = value;
    setVocabulary(updatedInput);
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
                    <button className="buttonSave">Сохранить</button>
                    <button className="buttonCancel" onClick={() => setEditingIndex(null)}>
                      Отмена
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <button className="buttonEdit" onClick={() => handleEditing(index)}></button>
                    <button className="buttonDelete"></button>
                  </React.Fragment>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default WordsList;
