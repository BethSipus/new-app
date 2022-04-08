//IIFE
let pokemonRepository = (function() {

  let pokemonList = [
    {
    name: 'Squirtel',
    height: 0.5,
    type: ['water']
  },
  {
    name: 'Jigglypuff',
    height: 0.5,
    type: ['fairy', 'normal']
  },
  {
    name: 'Snorlax',
    height: 2.1,
    type: ['normal']
  },
]
// Public Functions
  function add (pokemon) {
    pokemonList.push(pokemon)
  }
  function getAll () {
    return pokemonList
  }
  // Pokemon Name When Clicked
  function showDetails (pokemon) {
    console.log(pokemon.name)
  }
  function addListener (button, pokemon) {
    button.addEventListener ("click", function () {
      showDetails(pokemon)
    })
  }
  // Pokemon to ul as Buttons
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    addListener(button, pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  }
})();

//Updated foreach loop 
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)
});
