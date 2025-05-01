//Функциональный компонент:

import React, { useState } from "react";
import "../styles/styles.css";

function CounterFunctional() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((lastCount) => lastCount + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}

export default CounterFunctional;
