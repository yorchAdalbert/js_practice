const validate = phoneNumber => {
    if (phoneNumber.length !== 8)
        return false;

    let first = phoneNumber.substring(0,3);
    let second = phoneNumber.substring(4);

    if (phoneNumber.charAt(3) !== '-' || isNaN(first) || isNaN(second))
        return false;

    return true;
}

let input1 = '123-4567';
let input2 = '3322582663';
let input3 = '33225836';
let input4 = 'abc-fghi';

validate(input1);

console.log(validate(input1));
console.log(validate(input2));
console.log(validate(input3));
console.log(validate(input4));