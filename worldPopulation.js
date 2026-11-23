

let currentWorldPopulation = 8000000000;
let populationGrowthRate = 0.01;

let estimatedWorldPopulation = currentWorldPopulation;

for(let year = 1; year <= 5; year++){

estimatedWorldPopulation = (estimatedWorldPopulation * populationGrowthRate) + estimatedWorldPopulation;

console.log(estimatedWorldPopulation + " for year", + year);
}