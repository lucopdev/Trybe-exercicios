const generateRandomNumber = () => Math.round(Math.random() * 10);

// const resolvedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(`O número gerado é ${randomNumber}.`);
//     }, 2000);
//   });

// const rejectedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       reject(new Error(`O número ${randomNumber} não é válido.`));
//     }, 2000);
//   });

const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(`O número gerado é ${randomNumber}.`);
      } else {
        reject(new Error(`O número ${randomNumber} não é válido.`))
      }
    }, 2000);
  });

// resolvedPromise().then((response) => {
//   console.log(response);
// });

// rejectedPromise().then((response) => {
//   console.log(response);
// })
//   .catch((error) => {
//     console.log(`RejectedPromise: ${error.message}`);
//   });

randomPromise()
  .then((response) => {
    console.log(`Promise resolvida. ${response}`);
  })
  .catch((error) => {
    console.log(`Promise rejeitada: ${error.message}`);
  })
  .finally(() => {
    console.log('Fim da execução da promise');
  });

  console.log('Hello World!');