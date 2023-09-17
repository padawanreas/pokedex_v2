import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemons from "../Pokemons/Pokemons";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      response.data.results.forEach(async (pokemon) => {
        const getPokemon = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((state) => {
          state = [...state, getPokemon.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };
    fetchPokemon();
  }, []);
  //console.log(generation);
  console.log(pokemons);
  //const [search, setSearch] = useState("");
  //const [nextUrl, setNextUrl] = useState("");

  return (
    <div className="container">
      <h1>Pokedex</h1>

      <Pokemons pokemon={pokemons} />
    </div>
  );
};

export default Pokedex;
