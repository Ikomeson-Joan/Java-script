const prompt = require("prompt-sync")();



let Integer = Number(prompt("Enter an Integer: "));

if (Integer % 3 === 0){
console.log (Integer + " is divisible by 3");
}
else{
console.log (Integer + " is not divisible by 3");
}
