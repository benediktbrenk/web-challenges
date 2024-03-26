import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Lorem</Button>
      <Button>Ipsum</Button>
      <Button>Dolor</Button>
      <Button>Sint</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
