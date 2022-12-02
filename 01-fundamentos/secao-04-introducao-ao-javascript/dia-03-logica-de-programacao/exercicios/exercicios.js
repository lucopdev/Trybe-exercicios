// // 01
// let number = 10;
// let factorial = number;
// for (let index = 1; index < number; index += 1) {
//     factorial = factorial * (number-index);    
// }
// console.log(factorial);

// 02
// let word = 'TRYBER';
// let newWord = '';
// let allLetters = word.length
// for (let index = 1; index <= allLetters; index++) {
//     newWord = newWord + word[allLetters-index];
// }
// console.log(newWord);

// 03
// let largerWord = 0;
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// for (let index = 0; index < array.length; index++) {
//     if (largerWord < array[index].length) {
//         largerWord = array[index].length;
//     }
// }
// console.log(largerWord);

// 04
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let largerWord = array[0].length;

// for (let index = 0; index < array.length; index++) {    
//     if (largerWord > array[index].length) {
//         largerWord = array[index].length;
//     }
// }
// console.log(largerWord);

// 05
let limite = 500;
let primos = [];
let maiorPrimo = 0;

for (let index = 2; index < limite; index += 1) {
    let primo = true;
    for (let indexInterno = 2; indexInterno <= limite; indexInterno += 1) {
        if ((index % indexInterno === 0) && index !== indexInterno) {
            primo = false;
        }
    }
    if (primo === true) {
        primos.push(index);
    }
}

for (let index = 0; index < primos.length; index++) {
    if (primos[index] > maiorPrimo) {
        maiorPrimo = primos[index];
    }
}

console.log(maiorPrimo);