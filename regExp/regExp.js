/*
    A regular expression is formally a grammar for describing patterns in text.
*/

// Regular expression constructor

let areaCode = new RegExp(/[0-9]{3}/);      // To create a regular expression, you need to pass a search pattern to the regular constructor
let phoneNumber = new RegExp(/^\d{3}-?\d{4}$/);  // The argument to RegExp constructor is the search pattern

/*
    The key to understand RegExp is by learning how to read the patterns...

    Pattern /[0-9]{3}/

    //    The foward slashes at the beginning and the end form the regular expression.
    [0-9] This says match any of the numbers in the range 0-9, you're specifying a range of letters or numbers.
    {3}   This says that you want to match three of the previous characters. You want you match 3 numbers in the range 0-9
    
    example: "201" or "509" or "503" any number from 0-9


    Pattern /^\d{3}-?d{4}$/

    //  The foward slashes at the beginning and the end form the regular expression.
    ^   means match at the beginning of the string
    \d  means match any one digit number
    {3} means match three of them
    -?   Next match zero or one dash
    \d  means match any one digit number
    {4} To match four of them
    $   means the end of the string

    examples: "555-1212" or "5551212"   Those examples matches a seven digit phone number with or without a dash
*/

// Using a RegExp object

let amyHome = "555-1212"        // To use a regular expression, you first need a string to search.

/*
    Then you match the regular expression to the string by calling the match method on the string, and passing the regular
    expression object as an argument.
*/

let result = amyHome.match(phoneNumber);

console.log(result);

let invalid = "5556-1212";
let result2 = invalid.match(phoneNumber);

console.log(result2);

let numbers = '1572489';

console.log(numbers.match(areaCode));