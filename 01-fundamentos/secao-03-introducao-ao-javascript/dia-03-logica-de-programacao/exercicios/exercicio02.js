// 02
let word = 'TRYBER';
let newWord = '';
let allLetters = word.length
for (let index = 1; index <= allLetters; index++) {
    newWord = newWord + word[allLetters-index];
}
console.log(newWord);