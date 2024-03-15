console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = "Hallo";
  newLi.classList = "toast-container__message";
  toastContainer.append(newLi);
});

clearButton.addEventListener("click", () => {
  toastContainer.textContent = "";
});
