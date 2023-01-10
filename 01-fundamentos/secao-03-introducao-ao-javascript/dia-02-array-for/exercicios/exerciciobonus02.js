let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Exercício 02:
for (let secondIndex = 1; secondIndex < numbers.length; secondIndex++) {

    for (let index = 0; index < secondIndex; index++) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[secondIndex];
            numbers[secondIndex] = numbers[index];
            numbers[index] = position;
        }
    }
}
console.log(numbers);