let myName = { firstName: 'Pedro' };
let identity = myName;

myName.firstName = 'Carol';

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol