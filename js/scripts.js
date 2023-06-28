let pokemonRepository = (function () {
let pokemonListInternal = [];

    function add(pokemon) {
      pokemonListInternal.push(pokemon);
    }

    function addListItem(pokemon) {
      let pokemonList = document.querySelector('.pokemon-list'); 
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('buttonItem');
      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
      }

      
    function getAll() {
      return pokemonListInternal;
    }
  
    return {
      add: add,
<<<<<<< Updated upstream
      getAll: getAll
    };
  })();
=======
      getAll: getAll,
      addListItem: addListItem
    }})
  ();
>>>>>>> Stashed changes

  pokemonRepository.add({name:"Bulbasaur",height:7,type:["grass","poison"]});
  pokemonRepository.add({name:"Eve",height:22,type:["water","speed"]});
  pokemonRepository.add({name:"Idunno", height:99,type:["gotme","gotyou"]});
  // I am not famliar with Pokeman so I just made up names and characteristics>

let pokemonListExternal = [];
pokemonListExternal = pokemonRepository.getAll();

/*OLD CODE:
for (let i = 0; i < pokemonList.length; i++) {
    console.log(pokemonList[i].name + " height = " +pokemonList[i].height);
    document.write(pokemonList[i].name + " height = " +pokemonList[i].height);
    if (pokemonList[i].height > 30)
    {document.write(" - Wow, that's big!")};
    document.write("<br>")  */

<<<<<<< Updated upstream
pokemonListExternal.forEach(function(user) {
    //  pokemonListExternal is interchangeable in teh forEach loop with pokemonRepository.gatAll()
//pokemonRepository.getAll().forEach(function(user) {
let pokemonList = document.querySelector('.pokemon-list'); 
//console.log(pokemonList);
let listItem = document.createElement('li');
let button = document.createElement('button');
button.innerText = user.name;
console.log(user.name);
button.classList.add('buttonItem');
listItem.appendChild(button);
console.log(button);
console.log(listItem);
pokemonList.appendChild(listItem);
=======
//pokemonListExternal.forEach(function(user) {
    //  pokemonListExternal is interchangeable in the forEach loop with pokemonRepository.gatAll()
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
//let pokemonList = document.querySelector('.pokemon-list'); 
//let listItem = document.createElement('li');
//let button = document.createElement('button');
//button.innerText = user.name;
//button.classList.add('buttonItem');
//listItem.appendChild(button);
//pokemonList.appendChild(listItem);
>>>>>>> Stashed changes
});

console.log(pokemonListExternal);
  // added a list of Pokemon objects to the DOM along with their height
// included a line break for visual appearance
// added a condition to check for height above 30 and print a message to the DOM