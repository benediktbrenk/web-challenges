import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [buttonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${(pageId - 1) * 20}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setButtonVisible(pageId > 1);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [pageId]);

  return (
    <main>
      {buttonVisible && (
        <button type="button" onClick={() => setPageId(pageId - 1)}>
          Previous page
        </button>
      )}
      <button type="button" onClick={() => setPageId(pageId + 1)}>
        Next page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
