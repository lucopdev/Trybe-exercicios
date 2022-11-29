// // 01
// let number = 10;
// let factorial = number;
// for (let index = 1; index < number; index += 1) {
//     factorial = factorial * (number-index);    
// }
// console.log(factorial);

// 02
let word = 'TRYBER';
let newWord = '';
let allLetters = word.length
for (let index = 1; index <= allLetters; index++) {
    newWord = newWord + word[allLetters-index];
}
console.log(newWord);