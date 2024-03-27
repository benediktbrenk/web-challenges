import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1340,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1341,
      name: "🍍 Ananas",
      color: "orange",
    },
  ];

  return (
    <>
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </>
  );
}
