const prompt = require("prompt-sync")();


let Integer1 = Number(prompt("Enter an Integer: "));
let Integer2 = Number(prompt("Enter an Integer: "));

let Integer1Tripled = Integer1 * Integer1 * Integer1;
let Integer2Doubled = Integer2 * Integer2;
if (Integer1Tripled % Integer2Doubled === 0){
console.log (Integer1Tripled + " is a multiple of " + Integer2Doubled);
}
else{
console.log (Integer1Tripled + " is a not multiple of " + Integer2Doubled);
}
