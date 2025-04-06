import React from "react";

function ActionButtons() {
  return (
    <React.Fragment>
      <div className="unknownWords"></div>
      <button className="unknownWordsButton">Не знаю</button>
      <div className="allWords"></div>
      <div className="knownWords"></div>
      <button className="knownWordsButton">Знаю</button>
    </React.Fragment>
  );
}

export default ActionButtons;
