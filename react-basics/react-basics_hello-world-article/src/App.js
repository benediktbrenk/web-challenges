import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hey</h1>
      <p>Ho</p>
    </article>
  );
}
