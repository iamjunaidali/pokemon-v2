import React, { useState, useEffect } from 'react';
import * as actions from '../actions/pokemon.actions';
import { Icon } from '@material-ui/core';
import Info from './info';

const Pokemon = ({ name, getEvolutions, evolutionMode }) => {

  const [pokemon, setPokemon] = useState(null);
  const [infoOpen, setInfoOpen] = React.useState(false);
  let sprite_versions = ['back_default', 'back_female', 'back_shiny', 'back_shiny_female', 'front_default', 'front_female', 'front_shiny', 'front_shiny_female'];

  useEffect(() => {
    actions.getPokemon(name, setPokemon);
  }, []);

  const openInfo = () => {
    setInfoOpen(true);
  }

  const closeInfo = () => {
    setInfoOpen(false);
  }

  const playImages = (name) => {
    let images = sprite_versions.map((name) => pokemon.sprites[name]);
    images = images.filter((image) => image != null);
    setInterval(() => {
      const element = document.getElementById(`pokemon--species--sprite--${name}`);
      if (element) {
        element.setAttribute('src', images[0])
        images.splice(images.length, 0, images[0]);
        images.splice(0, 1);
      }
    }, (Math.floor(Math.random() * 3) + 1) * 1000);
  }

  if (pokemon) {
    playImages(name);
  }

  return <>
    { pokemon && <div className="pokemon--species">
      <div className="pokemon--species--container">
        <div className="pokemon--species--sprite">
          <img id={`pokemon--species--sprite--${name}`} src={pokemon.sprites.front_default} onClick={() => getEvolutions(pokemon)} />
        </div>
        <Icon className="pokemon--species--properties--button" onClick={openInfo}>info</Icon>
        <Info pokemon={pokemon} infoOpen={infoOpen} closeInfo={closeInfo}   />
        {/* <div className="pokemon--species--properties">Height: {pokemon.height}, Weight: {pokemon.weight}, {pokemon.sprites.back_female ? 'Male' : 'Female' }</div> */}
        <div className="pokemon--species--name" onClick={() => getEvolutions(pokemon)}> {name} </div>
      </div>
    </div>}
    {evolutionMode && <span className="arrow-right"></span>}
  </>;
}

export default Pokemon;
