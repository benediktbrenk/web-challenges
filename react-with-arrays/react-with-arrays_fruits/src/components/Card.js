import "./Card.css";

export default function Card({ name, color }) {
  return (
    <div className="app">
      <p className="card" style={{ "--color-water": color }}>
        {name}
      </p>
    </div>
  );
}
