console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const r2 = data.results.find((result) => result.name === "R2-D2");
  console.log(r2.eye_color);
  return data;
}

fetchData();
