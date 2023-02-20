let a = 0/0;

console.log(typeof a);

if ( isNaN(a))
    a = 0;

console.log(a);

if (99 == '99')
    console.log('A number equal to a string')
else
    console.log('No way a number equals a string');

console.log('true' == true);
console.log(Infinity - '1');


// Looking for object equlity

function Person (name, age) {
    this.name = name;
    this.age = age;    
};

const isObjectEqual = (obj1, obj2) => {
    if ( obj1 == obj2)
        console.log('The two objects are equal...')
    else
        console.log('The two objects are difference!');
}

const person1 = new Person('Alan', 5);
const person2 = new Person('Allison', 0);
const personaClone = person1;

isObjectEqual(person1, person2);
isObjectEqual(person1, personaClone);

console.log(person1.name);
console.log(person2.name);

let stolenDiamond = {};

if (stolenDiamond)
    console.log('Yoy stole the diamond');