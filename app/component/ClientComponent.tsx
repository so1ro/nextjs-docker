"use client";

import { useEffect, useState } from "react";

export const ClientComponent = () => {
  const [pokemonData, setPokemonData] = useState<any>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/2")
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log("pokemonDataForClientComponent: ", data);
      });
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div>
          <p>Name: {pokemonData.name}</p>
          <img
            src={pokemonData.sprites?.front_default}
            alt={pokemonData.name}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
