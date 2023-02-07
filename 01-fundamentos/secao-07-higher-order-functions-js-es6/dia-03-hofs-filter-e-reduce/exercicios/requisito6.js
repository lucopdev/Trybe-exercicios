const books = require('./data_base');

const authorWith3DotsOnName = () => {
  const bookFound = books.filter((book) => {
    return book.author.name[1] === '.'
      && book.author.name[4] === '.'
      && book.author.name[7] === '.';
  });
  return bookFound;
};
console.log(authorWith3DotsOnName());