"use server";

export async function getPokemonData(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon data");
  return res.json();
}
