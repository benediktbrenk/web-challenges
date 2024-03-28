import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function onAddTag(tag) {
    setTags([...tags, tag]);
  }

  function onDeleteTag(tagToDelete) {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={onAddTag} />
      <List tags={tags} onDeleteTag={onDeleteTag} />
    </main>
  );
}
