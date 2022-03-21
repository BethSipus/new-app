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

pokemonList.forEach(function(pokemon){
document.write(pokemon.name + " with type: (" + pokemon.type + ") " + "and" + " (height :" + pokemon.height + "),   ")
});

/*for (let i=0; i < pokemonList.length; i++){
  if(pokemonList[i].height > 1){
    document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + " )" + `Wow it's a big pokemon!!!`)
  }else {
  document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + " )")
}
}*/
