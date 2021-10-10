let pokemonInfo = document.querySelector("#pokemon-info");
let pokemonImage = document.querySelector("#pokemon-image");
let newImage = document.createElement("img");
let random = Math.floor(Math.random() * 100);
let item = "https://pokeapi.co/api/v2/pokemon/" + random;
let recarga = document
  .querySelector("#reload")
  .addEventListener("click", recargar);

function recargar() {
  location.reload();
}

fetch(item)
  .then((respuesta) => respuesta.json())
  .then((datosParseados) => {
    pokemonInfo.innerText = datosParseados.name;
    newImage.setAttribute(
      "src",
      datosParseados.sprites.other.dream_world.front_default
    );
    pokemonImage.appendChild(newImage);
  })
  .catch((err) => console.error(err));
