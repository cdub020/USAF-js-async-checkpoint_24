/*Create a command line application that processes a file list of pokemon names (each name seperated by a new line)
  and logs each Pokemon's types (for some there are many) according to the pokeapi.co API.
Example file input (input.txt)
charizard
pikachu
Example console output:
Charizard: flying, fire
Pikachu: electric
*/

//*** Global Declarations ***
const fs = require("fs");
const file = "input.txt"
const pokemon_url = "https://pokeapi.co/api/v2/pokemon/";
const fetch = require('node-fetch');

read_text = () => {
  var filearr = [];
  let textinput = fs.readFileSync(file, "utf8");

  return filearr = textinput.split("\n"); // Output To Array
}

const getPokemonData = async (pokemon) => {
  let temparr = [];
  let pokeobj = {};
    try{
      const response = await fetch(pokemon_url + pokemon);
      const data = await response.json();

      for (var x=0; x < data.types.length; x++){
          temparr.push(data.types[x].type.name);
      }
      pokeobj = {
        'name' : pokemon,
        'type' : temparr
      };
      return pokeobj;
    }

  catch{
    console.log("Oops, you did something wrong.");
  }
}

//** MAIN ***
//read text from file input to variable

var pokemonarr = read_text();
for (var index = 0; index < pokemonarr.length; index++){ 
    console.log
    getPokemonData(pokemonarr[index])
      .then(val => console.log(val.name + ": " + val.type.join(', ')));
}
