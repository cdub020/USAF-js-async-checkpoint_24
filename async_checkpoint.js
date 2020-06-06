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

// Function reads an input file and returns an array with pokemon
read_text = () => {
  var filearr = [];
  let textinput = fs.readFileSync(file, "utf8");
  return filearr = textinput.split("\n"); // Output To Array
}

//Function fetchs pokemon from API, returns object with name (string) type(array)
const getPokemonData = async (pokemon) => {
  let temparr = [];
  let pokeobj = {};
  let returnpokemon = ""

    try{
      const response = await fetch(pokemon_url + pokemon);
      const data = await response.json();

      for (var x=0; x < data.types.length; x++){ //push all pokemon types to temp array
          temparr.push(data.types[x].type.name);
      }
      // We have to do this after the API calls since the url only takes lowercase
      let flUppercase = pokemon.split(""); // split the string to char array
      flUppercase[0] = flUppercase[0].toUpperCase(); //Capitalize first letter
      returnpokemon = flUppercase.join("") //push array back to string
      
      //Save our pokemon and it's type in an object
      pokeobj = {
        'name' : returnpokemon,
        'type' : temparr
      };
      return pokeobj; //return object
    }

  catch{ //If anything doesn't work out, its your fault.
    console.log("Oops, you did something wrong."); 
  }
}

//** MAIN ***
//read text from file input to variable

var pokemonarr = read_text(); //save all the pokemon from file to array (lowercase)
for (var index = 0; index < pokemonarr.length; index++){ //iterate for how many pokemon we have
    getPokemonData(pokemonarr[index]) //Send function index'd pokemon
      .then(val => console.log(val.name + ": " + val.type.join(', '))); //if promise comes back, log results
}
