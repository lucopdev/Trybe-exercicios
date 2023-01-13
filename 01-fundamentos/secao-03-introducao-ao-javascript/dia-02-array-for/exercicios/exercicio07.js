//07
//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let minValue = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (minValue > numbers[index]) {
        minValue = numbers[index];
    }
}
console.log(minValue);
