import pokemonApi from '../api/pokemonApi';

const POKEMON_LIMIT = 100;

export function getPokemons(query = `/pokemon?limit=${POKEMON_LIMIT}&offset=0`) {
    return pokemonApi.get(query);
}

export function getPokemon(name) {
    return pokemonApi.get(`/pokemon/${name}`);
}

export function getEvolution(id) {
    return pokemonApi.get(`/evolution-chain/${id}`);
}
