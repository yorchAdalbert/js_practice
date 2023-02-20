/*
    The .forEach() iterator will execute the same code for each element
    of an array.

    The .forEach() method takes a callback function as an argument.
    A callback function is a function passed as an argument into another function.
*/

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(groceryIteam => console.log(`- ${groceryIteam}`));

/*
 *  The .map() method
    This method return a new array.
 */

const numbers = [1, 2, 3, 4, 5, 6];
const bigNumbers = numbers.map(num => num * 10);

console.log(numbers);
console.log(bigNumbers);

/*
    The .filter() method
    This method return a new array
    The .filter() method should return true or false depending on the 
    element that is passed to it.
*/

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => word.length < 6);
console.log(shortWords);

/*
    The .findIndex() method
    This method will return the index of the first element that evalutes to
    true in the callback function.

    If there isn't a single element in the array that satisfies the condition
    in the callback, then .findIndex() will return -1
*/

const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => num < 10);

console.log(lessThanTen);

/**
 * The .reduce() method
 * This method returns a single value after iterating through the elements of an array.
 * thereby reducing the array.
 */

const newNumbers = [1, 2, 4, 10];
const summedNums = newNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(summedNums);

const uniqueWords = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
const interestingWords = uniqueWords.filter(word => word.length > 5);

console.log(uniqueWords.some(word => word.length < 6));
console.log(interestingWords.every(word => word.length > 5));
console.log(interestingWords);
