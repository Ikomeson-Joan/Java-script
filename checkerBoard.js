

let size = 8;

let counter = 1

while (counter <= size){

let chessBoard = ""

for (let gird = 1; gird <= size*2; gird+=2){

if (counter % 2 != 0){


chessBoard = chessBoard + " *";
 
} 


else {

chessBoard = chessBoard + "* ";

}


} 

console.log (chessBoard);

counter ++

}
