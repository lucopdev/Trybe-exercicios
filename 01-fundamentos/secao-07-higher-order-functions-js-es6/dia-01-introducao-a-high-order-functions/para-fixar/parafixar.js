const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome} - Idade: ${pessoa.idade}`));
console.log('--------------------------');
console.log(pessoas.find((pessoa) => pessoa.nome === 'Ana'));
console.log('--------------------------');
console.log(pessoas.some((pessoa) => pessoa.idade > 30));
console.log('--------------------------');
console.log(pessoas.every((pessoa) => pessoa.idade > 30));