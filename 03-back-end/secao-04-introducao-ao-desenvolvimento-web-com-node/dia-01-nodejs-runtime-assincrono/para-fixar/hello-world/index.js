const readline = require('readline-sync');

// const name = readline.question('Qual o seu nome? ');
// const age = readline.questionInt('Qual sua idade? ');

// console.log(`Hello ${name}, you are ${age} years old!`);

// const num1 = readline.questionInt('Digite o dividendo ');
// const num2 = readline.questionInt('Digite o divisor ');

// const divisor = (num1, num2) => {
//   if (num2 === 0) {
//     throw new Error('Divisor não pode ser zero!');
//   } else {
//     return num1 / num2;
//   }
// }

// try {
//   console.log(`O cociênte é ${divisor(num1, num2)}`);
// } catch (error) {
//   console.log('erro:', error.message);
// }

const num1 = readline.questionInt('Digite o dividendo ');
const num2 = readline.questionInt('Digite o divisor ');

const divisor = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if(num2 === 0) reject(new Error('O divisor não pode ser nulo'));
    resolve(`O resultado é ${num1 / num2}`);
  });

  return promise;
}

// divisor(num1, num2)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(`Erro: ${error.message}`));

const doSomething = async () => {
  try{
    console.log(await divisor(num1, num2));
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
}
doSomething();