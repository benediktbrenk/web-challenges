import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function onIncrement(action) {
    console.log(action);
    if (action === "increment") {
      setCounter(counter + 1);
    } else if (action === "decrement") {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => onIncrement("increment")}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => onIncrement("decrement")} // Function within anonymous function
        >
          -
        </button>
      </div>
    </div>
  );
}
