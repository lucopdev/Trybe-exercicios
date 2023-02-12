const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;

console.log(nationality);