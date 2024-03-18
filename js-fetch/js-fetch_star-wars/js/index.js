import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

// Create dom element for a card and append it to the root

fetchDataAndRender();

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  const cards = data.results;
  console.log(cards);
  cards.forEach((element) => {
    const card = Card(element);
    renderElement(card);
  });
}
