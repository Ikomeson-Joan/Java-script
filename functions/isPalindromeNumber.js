
function isPalindromeNumber(number){
	if (number < 0){
		return false;
	}
	let startingNumber = number;
	let reversedNumber = 0;
	while (number > 0){
		const extractedNumber = number % 10;
		reversedNumber = reversedNumber * 10 + extractedNumber;
		number = Math.floor(number/10);
	}
	return startingNumber === reversedNumber;
}

console.log (isPalindromeNumber(121));