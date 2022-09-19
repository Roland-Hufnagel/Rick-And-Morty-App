import {createCharacterCard} from './components/card/card.js';

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
let searchQuery = '';

async function fetchCharacters() {
  try {
    cardContainer.innerHTML = '';
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${searchQuery}&page=${page}`,
    );
    const result = await response.json();
    maxPage = result.info.pages;
    result.results.forEach(data => {
      const newCard = createCharacterCard(
        data.name,
        data.image,
        data.status,
        data.type,
        data.episode.length,
      );
      cardContainer.append(newCard);
    });
    pagination.textContent = `${page} / ${maxPage}`;
  } catch (error) {
    console.error(error.message);
  }
}

prevButton.addEventListener('click', event => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener('click', event => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

searchBar.addEventListener('submit', event => {
  event.preventDefault();
  page = 1;
  searchQuery = searchBar.elements.query.value;
  fetchCharacters();
});

fetchCharacters();
