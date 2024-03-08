console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
let pizzaSize1;
let pizzaSize2;

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
  gain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(gain);
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize2 = pizzaInput2.value;
  gain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(gain);
});

function calculatePizzaGain(diameter1, diameter2) {
  area1 = diameter1 * 2 * Math.PI;
  area2 = diameter2 * 2 * Math.PI;
  const gain = Math.round(((area2 - area1) / area1) * 100);
  output.textContent = gain;
  return gain;
}

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

function updateOutputColor(gain) {
  if (gain < 0) {
    outputSection.style.background = "var(--red)";
  } else {
    outputSection.style.background = "var(--green)";
  }
}
