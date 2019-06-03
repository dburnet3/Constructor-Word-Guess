var inquirer = require('inquirer');
var prompt = require('prompt');



function Letter(character) {
    this.character = character;
    this.guess = false;
    this.showGuess = function () {
        if (this.guess === true) {
            return this.character;
        } else {
            return "_";
        }
    }
    this.checkGuess = function (guess) {
        if (guess === this.character) {
            this.guess = true;
        }
        else {
            return false;
        }
    }

}





module.exports = Letter;