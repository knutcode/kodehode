let card = document.querySelector(".card-face");
let cardBg = document.querySelector(".container");

async function getAllPokemon() {
  card.innerHTML = "";

  let number = Math.floor(Math.random() * 150) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
  let data = await response.json();
  console.log(data);

  let pokeNameContainer = document.createElement("section");
  let pokeTypeContainer = document.createElement("div");
  let pokeName = document.createElement("h1");
  let pokeId = document.createElement("h2");
  let type = document.createElement("p");
  let img = document.createElement("img");

  pokeTypeContainer.classList.add("types");

  let stringId = data.id.toString();
  let paddedId = stringId.padStart(3, "0");

  pokeName.textContent = data.name;
  pokeId.textContent = `#${paddedId}`;
  type.textContent = data.types[0].type.name;
  img.src = data.sprites.other["official-artwork"].front_default;

  pokeTypeContainer.append(type);
  pokeNameContainer.append(pokeName, pokeTypeContainer);
  card.append(pokeNameContainer, pokeId, img);

  if (data.types[1]) {
    let typeTwo = document.createElement("p");
    typeTwo.textContent = data.types[1].type.name;
    typeTwo.classList.add(`${data.types[0].type.name}`);
    pokeTypeContainer.append(typeTwo);
  }

  if (type.textContent === data.types[0].type.name) {
    type.classList.add(`${data.types[0].type.name}`);
    cardBg.id = `${data.types[0].type.name}`;
  }
}
