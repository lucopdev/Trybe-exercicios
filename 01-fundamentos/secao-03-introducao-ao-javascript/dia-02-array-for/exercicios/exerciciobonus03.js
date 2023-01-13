let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Exercício 03:
let numbersTwice = [];
let numberX2 = 0;
for (let secondIndex = 1; secondIndex <= numbers.length; secondIndex++) {
    for (let index = 0; index < secondIndex; index++) {
        if (secondIndex === numbers.length) {
            numberX2 = numbers[index] * 2;
        } else {
            numberX2 = numbers[index] * numbers[secondIndex];
        }
    }

    numbersTwice.push(numberX2);
}
console.log(numbersTwice);