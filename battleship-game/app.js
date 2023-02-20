const prompt = require('prompt-sync')({sigint:true});

const field = 7;
let guesses = 1;
let shipLife = 3;

let shipcenter = Math.floor((Math.random() * field));
let shipLeft = shipcenter - 1;
let shipRight = shipcenter + 1;

if (shipcenter == 0 || shipcenter == 6)
    shipLife = 2;

while (shipLife) {
    console.log('Choose a number between 1 to 7');
    let userGuess = prompt('> ') - 1;

    if ((userGuess >= 0 && userGuess < 7) && (typeof userGuess == 'number')) {
        if (userGuess === shipcenter || userGuess === shipLeft || userGuess === shipRight) {
            console.log('You hit the ship');
            shipLife--;
        }  else {
            console.log('You Miss!!!');
            guesses++;
        }
    } else {
        console.log('Enter a valid value');
    }
}

console.log('Enemy ship sunk...');
console.log(`Your tried ${guesses} times to sink an enemy ship`);