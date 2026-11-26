
function climbStairs(totalSteps) {
	if (totalSteps <= 2) {
		return totalSteps;
	}

	if (totalSteps >= 3) {
		let stepOne = 1;
		let stepTwo = 2;
		for (let step = 3; step <= totalSteps; step++) {
			let currentStep = stepOne + stepTwo;
			stepOne = stepTwo;
			stepTwo = currentStep;
		}
		return stepTwo;
	}
}

console.log (climbStairs(1));