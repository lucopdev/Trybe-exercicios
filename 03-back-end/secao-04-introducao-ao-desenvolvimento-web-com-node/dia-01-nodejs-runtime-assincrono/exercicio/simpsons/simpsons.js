const readline = require('readline-sync');
const fs = require('fs').promises;


// REQUISITO 1
// const read = async () => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const characterArray = JSON.parse(file);

//  return characterArray.map((simpson) => `${simpson.id} - ${simpson.name}`).join('\n');
// }

// const main = async () => {
// console.log(await read());
// }


// REQUISITO 2
// const idChar = readline.questionInt('Digite o ID do personagem para ler ');

// const requestCharacter = async (id) => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const characterArray = JSON.parse(file);

//  const idFound = characterArray.find((character) => {
//   return character.id === String(id);
//  });
//  if(!idFound) return 'Id não encontrado';
//  return idFound;
// };

// const main = async () => {
//   console.log(await requestCharacter(idChar));
// };

// main();


// REQUISITO 3 - DELETE
const idChar = readline.questionInt('Digite o ID do personagem para excluir ');

const alterCharacter = async (entryId) => {
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const characterArray = JSON.parse(file);
  const newArray = characterArray.filter((character) => {
    return Number(character.id) !== entryId;
  });

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
  const newFile = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(newFile);
};

const main = async () => {
  console.log(await alterCharacter(idChar));
};

main();

// REQUISITO 4 - CREATE
// const idChar = readline.question('Digite o ID do personagem para adicionar ');
// const nameChar = readline.question('Digite o NOME do personagem para adicionar ');

// const alterCharacter = async (entryId, entryName) => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const characterArray = JSON.parse(file);
//   const newItem = {
//     id: entryId,
//     name: entryName,
//   }
//   const newArray = [...characterArray, newItem];
//   await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
//   const newFile = await fs.readFile('./simpsons.json', 'utf-8');
//   return JSON.parse(newFile);
// };

// const main = async () => {
//   console.log(await alterCharacter(idChar, nameChar));
// };

// main();