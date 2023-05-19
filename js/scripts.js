let pokemonList = [];
pokemonList=[
    {name:"Bulbasaur",height:7,type:["grass","poison"]},
    {name:"Eve",height:22,type:["water","speed"]},
    {name:"Idunno", height:99,type:["gotme","gotyou"]}];
// I am not famliar with Pokeman so I just made up names and characteristics

for (let i = 0; i < pokemonList.length; i++) {
    console.log(pokemonList[i].name + " height = " +pokemonList[i].height);
    document.write(pokemonList[i].name + " height = " +pokemonList[i].height + "<br>")   
}
// added a list of Pokemon objects to the DOM along with their height
// included a line break for visual appearance
// Works in Edge, but error when I try to run on Chrome: "This document requires 'TrustedHTML' assignment."