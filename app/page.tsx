export default async function Page() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const pokemon = await data.json();
  console.log("pokemon: ", pokemon.species.name);

  return (
    <h1>
      Hello <span>{pokemon.species.name}</span>!!
    </h1>
  );
}
