import React from "react";
import "../../styles/styles.scss";
import { Link } from "react-router-dom";

function WordsList() {
  return (
    <React.Fragment>
      <section className="wordsList">
        <table className="wordsListTable">
          <thead>
            <tr>
              <td>№</td>
              <td>Слово</td>
              <td>Транскрипция</td>
              <td>Перевод</td>
              <td>Теги</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>аа</td>
              <td>мм</td>
              <td>ыв</td>
              <td>аы</td>
              <td>
                <button className="buttonSave">Сохранить</button>
                <button className="buttonEdit"></button>
                <button className="buttonDelete"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </React.Fragment>
  );
}
export default WordsList;
