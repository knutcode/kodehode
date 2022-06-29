const card = document.querySelector(".card-face");
const cardBg = document.querySelector(".container");
const textArea = document.querySelector(".text-area");
const btn = document.getElementById("btn");

async function getAllPokemon() {
  card.innerHTML = "";
  textArea.innerHTML = "";
  btn.removeAttribute("class");

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
    btn.classList.add(`${data.types[0].type.name}`);
  }

  const fetchNew = await fetch("https://raw.githubusercontent.com/Jeglerjeg/pcbot/master/plugins/pokedexlib/pokedex.json");
  const newData = await fetchNew.json();

  let heightHeader = document.createElement("h2");
  let pokeHeight = document.createElement("p");
  let pokeWeight = document.createElement("p");
  let pokeAbilities = document.createElement("p");
  let desHeader = document.createElement("h2");
  let abiHeader = document.createElement("h2");
  let pokemonDes = document.createElement("p");
  let description = newData.pokemon[data.name].description;
  let abilitiesArr = data.abilities;

  pokeHeight.textContent = `Height: ${data.height / 10}m | Weight: ${data.weight / 10}kg`;
  pokeWeight.textContent = `${data.weight / 10}kg`;
  console.log(abilitiesArr);
  for (i = 0; i < abilitiesArr.length; i++) {
    let textV2 = data.abilities[i].ability.name;
    pokeAbilities.textContent += `${textV2}, `;
  }

  let stringText = pokeAbilities.textContent.toString();
  let newText = stringText.slice(0, -2);
  pokeAbilities.textContent = newText;

  pokemonDes.textContent = description;
  desHeader.textContent = "About";
  abiHeader.textContent = "Abilities";
  heightHeader.textContent = "Body";
  // weightHeader.textContent = "Weight";

  textArea.append(desHeader, pokemonDes, heightHeader, pokeHeight, abiHeader, pokeAbilities);
}
