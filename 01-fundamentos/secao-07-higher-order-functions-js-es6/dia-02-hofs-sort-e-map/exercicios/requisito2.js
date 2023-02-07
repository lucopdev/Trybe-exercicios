const books = require('./data_base');

const formatedAuthorNamesBirth = () => {
  const newArray = books.map((book) => {
    return `${book.author.name} - ${book.author.birthYear}`;
  });
  return newArray;
};

console.log(formatedAuthorNamesBirth());