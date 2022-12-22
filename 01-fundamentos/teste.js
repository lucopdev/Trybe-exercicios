// function generatePhoneNumber(arrayNumber) {
//     let generatedNumber = `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`;
//     let repeatedNumber = 0;
//     for (let index = 0; index < arrayNumber.length; index += 1) {
//     if (!(arrayNumber.length === 11)) {
//       return 'Array com tamanho incorreto.';
//     } else if (arrayNumber[index] < 0 || arrayNumber[index] > 9) {
//       return 'não é possível gerar um número de telefone com esses valores'
//     }
//   }
//   for (let index = 0; index < arrayNumber.length; index += 1) {
//       repeatedNumber = 0;
//     for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
//       if (arrayNumber[index] === arrayNumber[index2]) {
//         repeatedNumber +=1;
//       }
//     }
//     if (repeatedNumber >= 3) {
//         return 'não é possível gerar um número de telefone com esses valores'
//       }
//   }
//   return generatedNumber;
//   }
//   console.log(generatePhoneNumber([1,1,2,3,4,5,6,7,8,1,0]))

// function generatePhoneNumber(array) {
//   let generate = '(aa) aaaaa-aaaa';
//   array.forEach((element) => {
//     generate = generate.replace('a', element);
//   });
// // console.log(generate);
// if (array.length !== 11) {
//   return 'Array com tamanho incorreto.';
// }
//   for (let value of generate) {
//     if (value < 0 || value > 9) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//   }

//   let counter = 0;
//   for (let index = 0; index < array.length; index += 1) {
//     counter = 0 ;
//     for (let index1 = 0; index1 < array.length; index1 += 1) {

//       if (array[index] = array[index1]) {
//         counter += 1;
//       }

//     }
//   }
//   console.log(counter);
// }
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

//console.log('5'*'4'-'6');






// let A = 5;
// let B = 2;
// let C = 7;

// let D = A;
// A = B
// B = C
// C = D

// // A = B
// // B = C
// // C = A
// console.log(A, B, C);

const numbers = [8, 10, 2, 6, 3, 7, 11, 9, 0, 5, 3, 2];

let newNumbers = numbers.sort((a, b) => a - b);

console.log(newNumbers);

