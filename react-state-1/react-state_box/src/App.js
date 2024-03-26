import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{`${
        !isActive ? "activate" : "deactivate"
      }`}</button>
    </main>
  );
}

// ## Hacker Bonus

// Check the console and pay attention to the logged value of `isActive`. You will notice, that `console.log()` doesn't log the value you set with the `set` function one line before. If you set `true` it will log `false` and vice versa. This is not a bug, but the fundamental way how state in React works.

// Can you explain why this happens?
