import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hello World</h2>
      <label htmlFor="input"></label>
      <input id="input"></input>
      <a className="article__link" href="https://www.seicentovocale.de">
        Seicento
      </a>
    </article>
  );
}
