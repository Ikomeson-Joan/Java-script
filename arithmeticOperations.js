const prompt = require("prompt-sync")();


let number1 = Number(prompt("Enter first Integer: "));
let number2 = Number(prompt("Enter second Integer: "));
let number3 = Number(prompt("Enter third Integer: "));

let sum = number1 + number2 + number3;
let average = sum/3;
let product = number1 * number2 * number3;
let smallestNumber = Math.min(number1, number2, number3);
let largestNumber = Math.max(number1, number2, number3);

console.log ("Sum is " + sum)
console.log ("Average is " + average)
console.log ("Product is " + product)
console.log ("The smallest number is " + smallestNumber)
console.log ("The largest number is " + largestNumber)
