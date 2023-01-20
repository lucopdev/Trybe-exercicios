const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

  const person2 = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person2, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person2); // { name: 'Roberto', lastName: 'Silva' }

  clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person2); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------------------------');

person2.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person2); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log('--------------------------------');

const obj = { value1: 10, value2: 11 };
const cloneObj = obj;
console.log(cloneObj);
console.log('--------------------------------');

const person3 = {
  name:'Roberto',
};

const lastName3 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person3,lastName3);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person3);