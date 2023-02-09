const books = require('./books_data_base');

const expectedResult = 43;

const averageAge = () => {
  return books.reduce((acc, curr) => {
    acc += (curr.releaseYear - curr.author.birthYear) / books.length;
    return Math.round(acc);
  }, 0);
}

console.log(averageAge());

43
62
31
45
39
38
