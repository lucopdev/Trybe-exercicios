const books = require('./data_base');

const fantasyOrScienceFictionAuthors = (...genre) => {
  const namesArray = [];
  books.forEach((book, index) => {
    books.forEach((book2) => {
      if (book2.genre === genre[index]) {
        namesArray.push(book2.author.name);
      }
    })
  });
  return namesArray.sort();
}

console.log(fantasyOrScienceFictionAuthors('Fantasia', 'Ficção Científica'));