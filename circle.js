const prompt = require("prompt-sync")();


let radius = Number(prompt("Enter the radius of a circle: "));

let diameter = 2 * radius;
let circumference = 2 * 3.14159 * radius;
let area = 3.14159 * radius * radius;

console.log ("Circle's diameter is " + diameter)
console.log ("Circle's circumference is " + circumference)
console.log ("Circle's area is " + area)
