let word = 'bottles';
let count = 99;

while(count) {

    console.log(`${count} ${word} of beer on the wall`);
    console.log(`${count} ${word} of beer,`);
    console.log('Take one and pass it around,');

    count--;

    if (count === 1)
    word = 'bottle';

    if (count)
        console.log(`${count} ${word} of beer on the wall`);
    else
        console.log(`No more ${word} of beer on the wall.`)

}