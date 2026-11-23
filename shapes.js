

let row = 1
while (row <= 7) {

let box = ""

for (let column = 1; column <= 7; column ++){
if (column === 1 || column === 7 || row === 1 || row === 7){

box = box + "*";

} else{

box = box + " "
}

}

console.log (box);
row ++;

}



let rows = 7

if (rows % 2 != 0){

for(let number =  1; number <= rows; number++){

let shape = "";

for(let space = rows-1; space >= number; space--){

shape += " ";
}
  
for(let star = 1; star <= number; star++){
      
shape += "* ";
} 
  
console.log(shape);
}


 
for(let number2 = rows - 1; number2 >= 1; number2--){
 
let diamond = "";

for(let space1 = rows - 1; space1 >= number2; space1--){
diamond += " ";
}
for( let star1 = number2; star1 >= 1; star1 --){
 
diamond += "* ";
 
}
console.log (diamond);

}
}
