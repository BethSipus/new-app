//IIFE
let pokemonRepository = (function() {

  let pokemonList = [{
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
];

return {
      getAll:function() {
        return pokemonList;
          },
      add:function(pokemon){
        pokemonList.push(pokemon);
        }
      };
})();

pokemonList.forEach(function(pokemon){
pokemonRepository.getAll().forEach(function(pokemon){
document.write(pokemon.name + " with type: (" + pokemon.type + ") " + "and" + " (height :" + pokemon.height + "),   ")
});

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());
