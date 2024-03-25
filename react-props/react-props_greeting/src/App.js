import "./styles.css";

export default function App() {
  return <Greeting name="Georg" coach="Bard" />;
}

function Greeting({ name, coach }) {
  return <h1>{name === coach ? `Hello, Coach` : `Hello, ${name}`}</h1>;
}
