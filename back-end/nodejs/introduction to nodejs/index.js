// Testing any js.
console.log("Ah, it looks like it's beginning to rain.")

// Using public modules.
const { question, questionInt } = require('readline-sync');

const name = question('Qual seu nome? ');
const age = questionInt('Qual sua idade? ');

console.log(name, age);


