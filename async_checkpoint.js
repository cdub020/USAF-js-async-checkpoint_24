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
var fs = require("fs");



//** MAIN ***
//read text from file input to variable
var textinput = fs.readFileSync("input.txt", "utf8");
var pokemonarr = textinput.split("\n"); // To Array

//Using https://pokeapi.co/api/v2/pokemon/ API
const fetch = require('node-fetch'); 
fetch('pokeapi.co/api/v2/pokemon/' + pokemonarr[0])
  .then(response => response.json())
  .then(json => {
        console.log(json.types)
  })
