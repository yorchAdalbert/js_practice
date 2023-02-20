let input = 'jenny@wickedlysmart.com';

for ( let i = 0; i < input.length; i++)
    if ( input.charAt(i) === '@')
        console.log(`There's an @ sing at index ${i}`);

// indexOf method

let phrase = 'the cat in the hat';
let index = phrase.indexOf('cat');
console.log(`There's a cat sitting at index ${index}`);

let index2 = phrase.indexOf('the', 5);
console.log(`There's a cat sitting at index ${index2}`);

// substring method

let data = 'name|phone|address';
let va1 = data.substring(5, 10);        // Passing a starting index and the end index
let va2 = data.substring(5)             // Just passing the starting index
console.log(`Substring is ${va1}`);
console.log(`Substring is ${va2}`);


// The split method

let data2 = 'name|phone|address';
let vals = data.split('|');             // This method uses the delimiter to break the original string into pieces.
console.log(`Split array is ${vals}`);