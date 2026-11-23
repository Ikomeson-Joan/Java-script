const prompt = require("prompt-sync")();


let size = Number(prompt("Enter a grid size: "));

let counter = 1

while (counter <= size){

let chessBoard = ""

for (let gird = 1; gird <= size; gird+=2){

if (counter % 2 != 0){


chessBoard = chessBoard + " #";
 
} 


else {

chessBoard = chessBoard + "# ";

}


} 

console.log (chessBoard);

counter ++

}
