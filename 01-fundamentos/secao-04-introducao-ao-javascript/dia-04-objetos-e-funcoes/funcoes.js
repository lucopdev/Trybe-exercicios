// 01
// function palindrome(word) {
//     let size = word.length - 1;

//     for (let index = 0; index < word.length; index++) {
//         for (let index = 0; index < word.length; index++) {
//             if (word[index] !== word[size - index]) {
//                 return 'False';
//             }
//         }
//     }
//     return 'True';
// }
// console.log(palindrome('ubararabu'));

// let word = 'arara';
// let size = word.length-1;
// for (let index = 0; index < word.length; index++) {
//     console.log(word[size-index]);
// }

// 02
//[2, 3, 6, 7, 10, 1]
// function higherNumber(array) {
//     let higherIndex = 0;
//     for (let index = 0; index < array.length; index++) {
//         for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
//             if(array[innerIndex] > array[index]){
//                 higherIndex = innerIndex;
//             }
//         }
//     }
//     return higherIndex;
// }
// console.log(higherNumber([2, 3, 6, 7, 10, 1]));

//03
//[2, 4, 6, 7, 10, 0, -3]
// function higherNumber(array) {
//     let higherIndex = 0;
//     for (let index = 0; index < array.length; index++) {
//         for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
//             if(array[innerIndex] < array[index]){
//                 higherIndex = innerIndex;
//             }
//         }
//     }
//     return higherIndex;
// }
// console.log(higherNumber([2, 4, 6, 7, 10, 0, -3]));

