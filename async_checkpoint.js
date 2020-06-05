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
var typearr = [];


//Using https://pokeapi.co/api/v2/pokemon/ API
const fetch = require('node-fetch');
for (var index=0; index < pokemonarr.length;index ++) //loop for all pokemon in input file
fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonarr[index])
  .then(response => response.json())
  .then(json => {
        for (var x=0; x<json.types.length; x++){ //loop for all types
            //save each value to a typearray "json.types[x].type.name"
        }
        //Save pokeobject {"name" = pokemonarr[index], "Type": typearray
        // reset typearray value
  })
  //for in loop to iterate over object
  // console.log object properties to seperate lines
  // Not very good with the syntax yet so taking me long time to look up the different methods
