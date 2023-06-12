let pokemonRepository = (function () {
    let pokemonListInternal = [];

    function add(pokemon) {
      pokemonListInternal.push(pokemon);
    }
  
    function getAll() {
      return pokemonListInternal;
    }
  
    return {
      add: add,
      getAll: getAll
    };
  })();

  console.log(pokemonRepository.getAll());

  pokemonRepository.add({name:"Bulbasaur",height:7,type:["grass","poison"]});
  pokemonRepository.add({name:"Eve",height:22,type:["water","speed"]});
  pokemonRepository.add({name:"Idunno", height:99,type:["gotme","gotyou"]});
  // I am not famliar with Pokeman so I just made up names and characteristics>

console.log(pokemonRepository.getAll());

let pokemonListExternal = [];
pokemonListExternal = pokemonRepository.getAll();
console.log(pokemonListExternal);

/*OLD CODE:
for (let i = 0; i < pokemonList.length; i++) {
    console.log(pokemonList[i].name + " height = " +pokemonList[i].height);
    document.write(pokemonList[i].name + " height = " +pokemonList[i].height);
    if (pokemonList[i].height > 30)
    {document.write(" - Wow, that's big!")};
    document.write("<br>")  */

pokemonListExternal.forEach(function(user) {
    //  Why doesn't pokemonListExternal work?  It shows up as an Arry wusing console.log(), but the va;lues are undefined inteh forEACDH function.
//pokemonRepository.getAll().forEach(function(user) {
    console.log(user.name + " height = " +user.height);
    document.write(user.name + " height = " +user.height);
    if (user.height > 30)
    {document.write(" - Wow, that's big!")};
    document.write("<br>");
});

console.log(pokemonListExternal);
// added a list of Pokemon objects to the DOM along with their height
// included a line break for visual appearance
// Works in Edge, but error when I try to run on Chrome: "This document requires 'TrustedHTML' assignment."
// added a condition to check for height above 30 and print a message to the DOM