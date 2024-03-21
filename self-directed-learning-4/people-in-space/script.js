const peopleInSpace = document.querySelector(`[data-js="people-in-space"]`);
async function fetchData() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  peopleInSpace.textContent = data.number;
}
fetchData();
