//basic syntax
// const value =(p1,p2)=>{function code}

function multiply(x, y) {
    return x * y;
};
// OR
var multiply = function (x, y) {
    return x * y;
};
multiply(1,2);

// ES6
var advMultiply = (x,y) => { return x * y };
// OR
var advMultiply = (x, y) => x * y;
advMultiply(1,2);


// Basic Syntax with One Parameter
// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
//ES5
var phraseSplitter = function (phrase) {
    return phrase.split(' ');
};
//phraseSplitter('I am good.')
//ES6
const advPhraseSplitter = (phrase) => { return phrase.split(" ") }
//short form
const advPhraseSplitter = phrase => phrase.split(" ");
console.log(advPhraseSplitter("great! good day"));  // ["great!", "good", "day"]

// ES5
const double = function (n) {
    return n * 2
}
// ES6
//const double = (n) => {return n*2 }
const double = n => n * 2;
double(3); // 6


// Multiline arrow functions
const sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};


// No Parameters
//ES5
var docLogEs5 = function () {
    console.log(document);
};
//ES6
var docLogEs6 = () => { console.log(document); };
docLogEs6();

// Object Literal Syntax
//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
    return {
        id: id,
        name: name
    };
};
// ES6
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });
console.log(setNameIdsEs6(4, "Kyle"));   // Object {id: 4, name: "Kyle"}


// Use Cases for Arrow Functions -- START --
const smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];
// ES5
var prices = smartPhones.map(function (smartPhone) {
    return smartPhone.price;
});
// ES6
const prices = smartPhones.map(smartPhone => smartPhone.price);
console.log(prices); // [649, 576, 489]



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// ES5
var divisibleByThrreeES5 = array.filter(function (v) {
    return v % 3 === 0;
});
// ES6
const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);
console.log(divisibleByThrreeES6); // [3, 6, 9, 12, 15]