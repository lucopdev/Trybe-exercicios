const countries = require('./data_base');

const getPopulation = () => {
  const sum = countries.reduce((acc, item) => {
    return acc += item.population
  }, 0);
  return sum;
}

console.log(getPopulation());