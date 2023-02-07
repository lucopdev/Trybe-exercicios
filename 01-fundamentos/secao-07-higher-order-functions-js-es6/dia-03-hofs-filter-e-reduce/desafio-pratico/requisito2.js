const countries = require('./data_base');

const getTotalArea = () => {
  const totalArea = countries.reduce((acc, item)=>{
    return acc += item.area;
  }, 0);
  return totalArea;
}
console.log(getTotalArea());