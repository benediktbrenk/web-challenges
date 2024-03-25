import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return <Button color="hotpink" text="Click me!" onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
