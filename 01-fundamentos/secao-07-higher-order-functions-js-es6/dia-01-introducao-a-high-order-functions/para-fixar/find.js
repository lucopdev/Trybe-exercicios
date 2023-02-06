const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

console.log(numbers.find((num) => num % 3 === 0));
console.log('-------------------------------');

const names = ['João', 'Irene', 'Fernando', 'Maria'];
// Adicione seu código aqui
console.log(names.find((nome) => nome.length === 5));
console.log('-------------------------------');

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui
console.log(musicas.find((musica) => musica.id === '31031685'));

// const ids = [];
// for (let index = 0; index < musicas.length; index += 1) {
//   ids.push(musicas[index].id);
// }
// console.log(ids.find((id) => id === '31031685'));