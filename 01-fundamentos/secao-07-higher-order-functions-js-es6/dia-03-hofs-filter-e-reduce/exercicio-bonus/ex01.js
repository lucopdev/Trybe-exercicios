const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  return newArray = arrays.reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);
};

console.log(flatten());