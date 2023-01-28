const books = require('./database');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((book)=> book.author.birthYear > 1901);
}
console.log(everyoneWasBornOnSecXX() === expectedResult);
