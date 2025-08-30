"use client";

import { useEffect, useState } from "react";
import { getPokemonData } from "../lib/get_pokemon_data";

export const ClientComponent = () => {
  const [pokemonData, setPokemonData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonData(2);
        setPokemonData(data);
        console.log("pokemonDataForClientComponent: ", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
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
