import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
    alert("Hello! Member");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("welcome")}>
        Say welcome
      </button>
      <br /><br />

      <button onClick={handleClick}>
        Click on me
      </button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;