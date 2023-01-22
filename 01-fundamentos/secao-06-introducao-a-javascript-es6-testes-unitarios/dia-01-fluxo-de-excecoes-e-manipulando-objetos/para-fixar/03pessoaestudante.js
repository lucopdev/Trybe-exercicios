const pessoaestudante = {};

const createObject = (object, key, value) => {
  object[key] = value;
};

createObject(pessoaestudante, 'Nome', 'Lucas');
createObject(pessoaestudante, 'Sobrenome', 'Rosa');
createObject(pessoaestudante, 'Idade', '38');
createObject(pessoaestudante, 'Profissão', 'Dev');
createObject(pessoaestudante, 'Rua', 'Dr. GErvásio Alves Pereira, 183');

pessoaestudante.Nome = 'Adrian';
console.log(pessoaestudante['Rua']);
console.log(Object.values(pessoaestudante));
// let newKey = 'nome';
// const nome = 'Lucas';
// pessoaestudante[newKey] = nome;

// newKey = 'idade'
// const idade = 38;
// pessoaestudante[newKey] = idade;

// newKey = 'job';
// const job = 'Dev';
// pessoaestudante[newKey] = job;

// newKey = 'cidade';
// const town = 'Pelotas';
// pessoaestudante[newKey] = town;

console.table(pessoaestudante);
