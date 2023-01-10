//05
//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let maxValue = 0;
for (let value = 0; value < numbers.length; value += 1) {
    if (numbers[value] > maxValue) {
        maxValue = numbers[value];
    }
}
console.log(maxValue);