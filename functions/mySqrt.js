
function mySqrt(number) {
	if (number < 2) {
        	return number; 
	}
	if (number >= 2) {
		let startingNumber = 1;
		while (startingNumber <= number) {
			let finalNumber = startingNumber * startingNumber;

			if (finalNumber === number) {
				return startingNumber; 
			}
			if (finalNumber > number) {
				return startingNumber - 1;
			}

			startingNumber++;
		}
	}
}

console.log(mySqrt(12));