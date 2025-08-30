// Check the followings
// ✓ Server Component
// ✓ Next/Image
// ✓ API route
// ✓ Server action

import Image from "next/image";
import { getPokemonData } from "./lib/get_pokemon_data";
import { ClientComponent } from "./component/ClientComponent";
import ClientComponentApiFetch from "./component/ClientComponent_api_fetch";

export default async function Page() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const pokemon = await data.json();

  const pokemonData = await getPokemonData(1);

  const pokemonDataForClientComponent = getPokemonData(2);

  return (
    <>
      <h1>
        Hello <span>{pokemon.species.name}</span>!!
      </h1>
      <h2>Next/Image test↓</h2>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        width={200}
        height={200}
        alt={pokemon.species.name}
      />
      <h2>Server Action test on Server Component↓</h2>
      <p>{pokemonData.name}</p>
      <h2>Server Action test on Client Component↓</h2>
      <ClientComponent />
      <h2>API route test↓</h2>
      <ClientComponentApiFetch />
    </>
  );
}
