import React, { useState, useEffect } from 'react';
import { getPokemon } from '../actions/pokemon.actions';
import { Icon } from '@material-ui/core';
import Info from './info';
import { playImages } from '../../utils/utils';

const Pokemon = ({ name, getEvolutions, evolutionMode }) => {

  const [pokemon, setPokemon] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    getPokemon(name, setPokemon);
  }, []);

  const openInfo = () => {
    setInfoOpen(true);
  }

  const closeInfo = () => {
    setInfoOpen(false);
  }

  if (pokemon) {
    playImages(pokemon);
  }

  return <>
    { pokemon && <div className="pokemon--species">
      <div className="pokemon--species--container">
        <div className="pokemon--species--sprite">
          <img id={`pokemon--species--sprite--${name}`} src={pokemon.sprites.front_default} onClick={() => getEvolutions(pokemon)} />
        </div>

        <Icon className="pokemon--species--properties--button" onClick={openInfo}>info</Icon>
        <Info pokemon={pokemon} infoOpen={infoOpen} closeInfo={closeInfo} />

        <div className="pokemon--species--name" onClick={() => getEvolutions(pokemon)}> {name} </div>
      </div>
    </div>}
    {evolutionMode && <span className="arrow-right"></span>}
  </>;
}

export default Pokemon;
