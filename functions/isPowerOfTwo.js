
function isPowerOfTwo(number) {
	while (number > 1) {
		if (number % 2 === 0){
			number = Math.floor (number/2); 
		}
		else {
			return false;
		}
	}
	return true;
}


console.log (isPowerOfTwo(6));