const sumAll = (num) => {
  let sum = 0;
  for (let index = 1; index <= num; index += 1) {
    sum += index;
  }
  return sum
};
console.log(sumAll(10));