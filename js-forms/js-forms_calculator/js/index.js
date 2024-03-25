console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const formElements = event.target.elements;

  if (formElements.addition.checked) {
    result = add(
      parseInt(formElements["number-a"].value),
      parseInt(formElements["number-b"].value)
    );
  }

  if (formElements.subtraction.checked) {
    result = subtract(
      parseInt(formElements["number-a"].value),
      parseInt(formElements["number-b"].value)
    );
  }

  if (formElements.multiplication.checked) {
    result = multiply(
      parseInt(formElements["number-a"].value),
      parseInt(formElements["number-b"].value)
    );
  }

  if (formElements.division.checked) {
    result = divide(
      parseInt(formElements["number-a"].value),
      parseInt(formElements["number-b"].value)
    );
  }

  resultOutput.textContent = result;
});
