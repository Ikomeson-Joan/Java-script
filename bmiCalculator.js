

let weight = Number(prompt("Enter your weight in kilograms: "));
let height = Number(prompt("Enter your height in meters: "));

let BMI = Math.floor (weight / (height * height));

if (BMI < 18.5) {
console.log (BMI + ", Underweight");
}
else if (BMI >= 18.5 && BMI <=24.9) {
console.log(BMI + ", Normal");
}
else if (BMI >= 25 && BMI <=29.9) {
console.log(BMI + ", Overweight");
}
else { 
console.log(BMI + ", Obese");
}
