const prompt = require("prompt-sync")();


let Integer = Number(prompt("Enter one Integer: "));

let IntegerSquare = Integer * Integer;

if(Integer < 100){
console.log (Integer + " < " + 100)
} else{
console.log (Integer + " > " + 100)
}

if(Integer === 100){
console.log (Integer + " = " + 100)
} else{
console.log (Integer + " != " + 100)
}

if(IntegerSquare < 100){
console.log (IntegerSquare + " < " + 100)
} else{
console.log (IntegerSquare + " > " + 100)
}

if(IntegerSquare === 100){
console.log (IntegerSquare + " = " + 100)
} else{
console.log (IntegerSquare + " != " + 100)
}
