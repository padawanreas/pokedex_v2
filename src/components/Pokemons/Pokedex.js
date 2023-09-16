import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      response.data.results.forEach(async (pokemon) => {
        const getPokemonInfo = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const getSpecies = await axios.get(getPokemonInfo.data.species.url);
        const getPokemons = { ...getPokemonInfo.data, ...getSpecies.data };
        setPokemons((state) => {
          state = [...state, getPokemons];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };
    fetchPokemons();
  }, []);
  console.log(search);
  return (
    <div className="container">
      <h1>Pokedex</h1>
      <div className="search">
        <input
          placeholder="search pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="pokedex">
        {pokemons
          .filter((pokemon) => {
            return search.toLowerCase() === ""
              ? pokemon
              : pokemon.name.toLowerCase().includes(search);
          })
          .map((pokemon, i) => (
            <h1 key={i}>{pokemon.name}</h1>
          ))}
      </div>
    </div>
  );
};

export default Pokedex;
