import React, { useState, useEffect } from 'react';
import * as actions from '../actions/evolution.actions';
import Pokemon from './pokemon';

const EvolutionChain = () => {
  const [evolutions, setEvolutions] = useState([])

  useEffect(() => {
    actions.getEvolutions(setEvolutions);
  }, [])

  return <>
    <a className="heading" href="/">
      <h3>EVOLUTIONS</h3>
    </a>
    <div className="pokemon--species--list"></div>
    {evolutions && evolutions.map((pokemon) => <Pokemon key={pokemon.url} name={pokemon.name} />)}

  </>;
}

export default EvolutionChain;
