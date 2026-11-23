const prompt = require("prompt-sync")();



let number1 = Number(prompt("Enter first Integer: "));
let number2 = Number(prompt("Enter second Integer: "));
let number3 = Number(prompt("Enter third Integer: "));
let number4 = Number(prompt("Enter fourth Integer: "));
let number5 = Number(prompt("Enter fifth Integer: "));

let smallestNumber = Math.min(number1, number2, number3, number4, number5);
let largestNumber = Math.max(number1, number2, number3, number4, number5);


console.log ("The smallest Integer is " + smallestNumber)
console.log ("The largest Integer is " + largestNumber)
