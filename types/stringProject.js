let input1 = '123-4567';
let input2 = '3322582663';
let input3 = '33225836';
let input4 = 'abc-fghi';

const isPhoneNumber = phone => {
    if (phone.length !== 8) return false;

    for (let i = 0; i < phone.length; i++) {
        if ( i === 3) { 
            if ( phone.charAt(i) !== '-' ) return false;
        } else if ( isNaN(phone.charAt(i)) ) {
            return false;
        }
    
    }

    return true;
}

console.log(isPhoneNumber(input1));
console.log(isPhoneNumber(input2));
console.log(isPhoneNumber(input3));
console.log(isPhoneNumber(input4));
