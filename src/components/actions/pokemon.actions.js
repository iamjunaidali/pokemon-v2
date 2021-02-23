import * as pokemonService from '../../services/pokemonService';
import { parseIdFromUrl } from '../../utils/utils';

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
            let pokemon = response.data;
            setPokemon({
                id: pokemon["id"],
                name: pokemon["name"],
                sprites: pokemon.sprites,
                height: pokemon["height"],
                weight: pokemon["weight"],
                speed: pokemon["stats"][0]["base_stat"],
                special_defense: pokemon["stats"][1]["base_stat"],
                special_attack: pokemon["stats"][2]["base_stat"],
                defense: pokemon["stats"][3]["base_stat"],
                attack: pokemon["stats"][4]["base_stat"],
                hp: pokemon["stats"][5]["base_stat"]
            });
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
