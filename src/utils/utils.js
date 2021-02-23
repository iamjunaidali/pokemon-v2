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
