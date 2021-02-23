import React, { useState, useEffect } from 'react';
import Pokemon from './pokemon';
import * as actions from '../actions/pokemon.actions';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [evolutionMode, setEvolutionMode] = useState(false);

  useEffect(() => {
    setDefaults();
  }, []);

  const setDefaults = () => {
    actions.getPokemons(setPokemons, setPreviousPage, setNextPage);
    setEvolutionMode(false);
  }

  const getPreviousPage = () => {
    actions.getPokemons(setPokemons, setPreviousPage, setNextPage, previousPage.split("/v2")[1]);
  }

  const getNextPage = () => {
    actions.getPokemons(setPokemons, setPreviousPage, setNextPage, nextPage.split("/v2")[1]);
  }

  const getEvolutions = (pokemon) => {
    actions.getEvolutions(pokemon.id, setPokemons);
    setEvolutionMode(true);
  }

  return <>
    <h3 className="heading" onClick={setDefaults}>POKEMONS</h3>

    <div className="pokemon--species--list">
      {pokemons && pokemons.map((pokemon, index) =>
        <Pokemon key={pokemon.url}
          name={pokemon.name}
          getEvolutions={getEvolutions}
          evolutionMode={pokemons.length-1 == index ? false : evolutionMode}
        />)}
    </div>
    { pokemons.length == 100 &&
      <span>
        <button className="margin10" disabled={ previousPage == null } onClick={getPreviousPage}> {"<"} </button>
        <button className="margin10" disabled={nextPage == null} onClick={getNextPage}> {">"} </button>
      </span>
      }

  </>;
}

export default PokemonList;
