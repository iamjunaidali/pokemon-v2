import * as pokemonService from '../../services/pokemonService';
import { parseIdFromUrl, initializePokemon } from '../../utils/utils';

export function getPokemons(setPokemons, setPreviousPage, setNextPage, query) {
  return (
    pokemonService.getPokemons(query))
      .then((response) => {
          setPreviousPage(response.data.previous);
          setPokemons(response.data.results);
          setNextPage(response.data.next);
      })
      .catch((error) => { alert(error.message) });
}

export function getPokemon(name, setPokemon) {
    return (
      pokemonService.getPokemon(name))
        .then((response) => {
            setPokemon(initializePokemon(response.data));
        })
        .catch((error) => { alert(error.message) });
}

export function getEvolutions(id, setPokemons, initial = []) {
    pokemonService.getEvolution(id)
        .then((response) => {
            let evolutions = response.data.chain;

            if (!evolutions.evolves_to) return setPokemons(initial);

            const pokemon = {
              id: parseIdFromUrl(evolutions.species.url),
              name: evolutions.species.name
            }
            initial.push(pokemon);
            if (evolutions.hasOwnProperty('evolves_to')) {
                evolutions.evolves_to.map((evolution) => getEvolutions(parseIdFromUrl(evolution.species.url), setPokemons, initial));
            }
        })
        .catch((error) => {
            if (error.message.includes("status code 404")) {
                setPokemons(initial);
                return
            }
            alert(error.message)
        });
}
