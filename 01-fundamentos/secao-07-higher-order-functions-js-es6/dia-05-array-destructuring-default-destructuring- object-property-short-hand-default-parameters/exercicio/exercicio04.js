const student1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const student2 = {
  name: `Vitor`,
  age: 20,
}

// escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
const getLastName = ({ lastName = 'lastName não preenchido' }) => lastName;

console.log(getLastName(student1));
console.log(getLastName(student2));