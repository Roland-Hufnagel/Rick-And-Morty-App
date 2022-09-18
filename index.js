import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = 'https://rickandmortyapi.com/api/character';


async function fetchCharacters(){
  try{
  const response = await fetch(searchQuery);
  const result = await response.json();
  console.log(result);
  result.results.forEach(data => {
    const newCard = createCharacterCard(data.name, data.image, data.status, data.type, data.episode.length);
    console.log(data.name);
    cardContainer.append(newCard);
  })
  }catch(error){
    console.error(error.message);
  }

}
fetchCharacters();