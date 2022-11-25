let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

/////////////////////////////////////////////////////////

let sum = 0;
for (values of numbers) {
    sum += values;
}

console.log(sum);

/////////////////////////////////////////////////////////

let average = 0;
for (values of numbers) {
    sum += values;
    average = sum / numbers.length;
}
console.log(average);

/////////////////////////////////////////////////////////

if (average > 20) {
    console.log('valor maior que 20!');
} else {
    console.log('valor menor ou igual a 20');
}

/////////////////////////////////////////////////////////

//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let maxValue = 0
for (let value = 0; value < numbers.length; value += 1) {
    if (numbers[value] > maxValue){
        maxValue = numbers[value];
    }
}
console.log(maxValue);

/////////////////////////////////////////////////////////