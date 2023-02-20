let x;

if (x === undefined)
    console.log('The variable does not have a value yet!');


// Testing undefined with an object property that doesn't exit

let customer = {
    name: 'Jenny'
}

if (customer.phoneNumber === undefined)
    console.log("This object's property doesn't exits.");

// Using the typeof operand, To see the type of something

let subject = 'Just a string';
console.log(typeof subject);
console.log(typeof customer);
console.log(typeof x);