let location1 = Math.floor(Math.random() * 5);
let location2 = location1 + 1;
let location3 =  location2 + 1;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (!isSunk) {
    guess = parseInt(prompt('Ready, aim, fire! (enter a number from 0-6):'));

    if (guess >= 0 && guess <= 6) {
        guesses++;
        if (guess === location1 || guess === location2 || guess === location3) {
            hits++;
            alert('HIT!');
        } else {
            alert('MISS!');
        }
        if (hits === 3) {
            isSunk = true;
            alert('You sank my battleship!');
        }
    } else {
        alert('Invalid input, please enter a valid input!');
    }
};

let stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accurancy was ${3/guesses}`;
alert(stats);

