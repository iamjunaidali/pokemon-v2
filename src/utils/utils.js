const sprite_versions = ['back_default', 'back_female', 'back_shiny', 'back_shiny_female', 'front_default', 'front_female', 'front_shiny', 'front_shiny_female'];

export const parseIdFromUrl = (url = '') => {
    const reg = /\/(\d+?)\/?$/g;
    const result = reg.exec(url);
    return result && result.length > 0 ? parseInt(result[1], 10) : null;
}

export const playImages = (pokemon) => {
    let images = sprite_versions.map((name) => pokemon.sprites[name]);
    images = images.filter((image) => image != null);
    setInterval(() => {
      const element = document.getElementById(`pokemon--species--sprite--${pokemon.name}`);
      if (element) {
        element.setAttribute('src', images[0])
        images.splice(images.length, 0, images[0]);
        images.splice(0, 1);
      }
    }, (Math.floor(Math.random() * 3) + 1) * 1000);
}

export const initializePokemon = (pokemon) => {
    return {
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
        hp: pokemon["stats"][5]["base_stat"],
        gender: pokemon.sprites.back_female ? 'Female' : 'Male'
    };
}

export const getPokemonProperties = () => {
    return [
        { title: 'Gender', key: 'gender' },
        { title: 'Height', key: 'height' },
        { title: 'Weight', key: 'weight' },
        { title: 'Speed', key: 'speed' },
        { title: 'Special Defense', key: 'special_defense' },
        { title: 'Special Attack', key: 'special_attack' },
        { title: 'Defense', key: 'defense' },
        { title: 'Attack', key: 'attack' },
        { title: 'HP', key: 'hp' }
    ]
}
