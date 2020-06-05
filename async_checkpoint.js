/*Create a command line application that processes a file list of pokemon names (each name seperated by a new line) 
  and logs each Pokemon's types (for some there are many) according to the pokeapi.co API.

Example file input (input.txt)

charizard
pikachu

Example console output:

Charizard: flying, fire
Pikachu: electric
*/
const fetch = require('node-fetch');
var fs = require("fs");

//read text from file input to variable
var textinput = fs.readFileSync("input.txt", "utf8");
var textByLine = textinput.split("\n"); // To Array

//Using 
