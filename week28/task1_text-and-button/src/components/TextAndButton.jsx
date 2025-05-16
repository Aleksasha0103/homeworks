import React, { useState } from "react";
import "../styles/styles.css";

function TextAndButton() {
  const [text, setText] = useState("");
  const [finalText, setfinalText] = useState("");

  const putText = (e) => {
    setText(e.target.value);
  };

  const putfinalText = (e) => {
    e.preventDefault();
    setfinalText(text.toUpperCase());
    setText("");
  };

  return (
    <>
      <form className="main__wrapper">
        <textarea onChange={putText} value={text} placeholder="Введите текст"></textarea>
        <button type="submit" onClick={putfinalText}>
          Записать
        </button>
        <div className="text-paragraph green">{finalText}</div>
      </form>
    </>
  );
}

export default TextAndButton;
