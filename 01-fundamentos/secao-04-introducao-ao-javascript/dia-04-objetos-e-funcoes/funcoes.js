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

02
[2, 3, 6, 7, 10, 1]
function higherIndex(array) {
    let higherIndex = 0;
    for (let index = 0; index < array.length; index++) {
        for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
            if(array[innerIndex] < array[index]){
                higherIndex = innerIndex;
            }
        }
    }
    return higherIndex;
}
console.log(higherIndex([2, 3, 6, 7, 10, 1]));

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

//04
//['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
// function names(array) {
//     let higherName = 0;
//     for (let index = 0; index < array.length; index++) {
//         for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
//             if(array[innerIndex].length > array[index].length){
//                 higherName = array[innerIndex];
//             }
//         }
//     }
//     return higherName;
// }
// console.log(names(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//05
// teste 01 [2, 3, 5, 2, 5, 8, 5, 2, 3, 5, 1, 2, 2, 2]
// teste 02 [1, 2, 3, 1, 5, 1, 2, 1, 5, 8, 1, 5, 2, 3, 5, 1, 2, 2, 2, 1, 5, 7, 1, 8, 1, 9, 1]
// function repeated(array) {
//     let counter = 0;
//     let counterArray = [];
//     let repeatedNumber = 0;
//     for (let index = 0; index < array.length; index++) {
//         for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
//             if (array[innerIndex] === array[index]) {
//                 counter++;
//             }
            
//         }
//         counterArray.push(counter);
//         counter = 0;
//     }

//     for (let index = 0; index < counterArray.length; index++) {
//         for (let innerIndex = 0; innerIndex < counterArray.length; innerIndex++) {
//             if (counterArray[innerIndex] > counterArray[index]) {
//                 repeatedNumber = array[innerIndex];
//             }
//         }
//     }
//     return repeatedNumber;
// }
// // [2, 3, 2, 5, 8, 2, 3]
// console.log(repeated([2, 3, 2, 5, 8, 2, 3]));