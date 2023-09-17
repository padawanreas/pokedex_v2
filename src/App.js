import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Pokedex from "./components/Pokedex/Pokedex";

const App = () => {
  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/generation/1"
      );
      const generation = response.data;
      const speciesUrls = response.data.pokemon_species.map(
        (pokemon) => pokemon.url
      );
      const speciesResponses = await Promise.all(
        speciesUrls.map((url) => axios.get(url))
      );

      const pokemonSpecies = speciesResponses.map((response) => response.data);

      setPokemons({ generation, pokemonSpecies });
    };
    fetchPokemons();
  }, []);
  console.log(pokemons);
  return (
    <div className="App">
      <Nav />
      <Pokedex />
    </div>
  );
};

export default App;
