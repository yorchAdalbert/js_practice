const validate = phoneNumber => phoneNumber.match(/^\d{3}-?\d{4}$/);

let input1 = '123-4567';
let input2 = '3322582663';
let input3 = '33225836';
let input4 = 'abc-fghi';

console.log(validate(input1));
console.log(validate(input2));
console.log(validate(input3));
console.log(validate(input4));