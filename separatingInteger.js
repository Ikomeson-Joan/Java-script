const prompt = require("prompt-sync")();


let number = Number(prompt("Enter a five digit leteger: "));

let divisor = 10;

let number1 = number % 10000;
let num1 = (number - number1) / 10000;
let number2 = number1 % 1000;
let num2 = (number1 - number2) / 1000;
let number3 = number2 % 100;
let num3 = (number2 - number3) / 100;
let number4 = number3 % 10;
let num4 = (number3 - number4) /10;
let number5 = num4;

console.log (num1, + "   ", + num2, + "   ", + num3, + "   ", + num4, + "   ", + number4)
