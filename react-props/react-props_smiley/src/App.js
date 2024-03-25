import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  return (
    <h1>
      <span
        role="img"
        aria-label={isHappy ? "Glückliches Gesicht" : "Trauriges Gesicht"}
      >
        {isHappy ? "😊" : "😢"}
      </span>
    </h1>
  );
}
