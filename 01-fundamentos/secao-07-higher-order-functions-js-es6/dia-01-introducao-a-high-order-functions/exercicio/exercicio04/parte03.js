const books = require('./database');

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => {
  // escreva seu código aqui
  let bookName;
  books.forEach((book) => {
    if (book.name.length === expectedResult.name.length) {
      bookName = book.name;
    }
  })
  return bookName;
};
console.log(getNamedBook());