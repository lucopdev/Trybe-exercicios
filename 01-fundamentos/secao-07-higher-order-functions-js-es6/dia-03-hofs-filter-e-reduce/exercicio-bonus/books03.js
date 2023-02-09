const books = require('./books_data_base');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => {
  return books.reduce((acc, curr) => {
    if (acc.name.length > curr.name.length) {
      return acc;
    } else {
      return curr;
    }
  });
};

console.log(longestNamedBook());