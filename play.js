
str = "apple";
debugger;
console.log(str.split('').reduce((reversed, character) => character + reversed , ''));
// console.log(rev);