const books = require('./data_base');

const formatedBookNames = () => {
  const newArray = books.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`;
  });
  return newArray;
}
console.log(formatedBookNames());