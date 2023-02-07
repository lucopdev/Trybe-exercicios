const countries = require('./data_base');

const longestName = () => {
  const longest = countries.reduce((acc, item) => {
    if (acc.name.length > item.name.length) {
      return acc;
    }
    return item;
  });
  return longest;
}
console.log(longestName());