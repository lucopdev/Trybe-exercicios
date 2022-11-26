// 01
//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

/////////////////////////////////////////////////////////
//02
let sum = 0;
for (values of numbers) {
    sum += values;
}

console.log(sum);

/////////////////////////////////////////////////////////
//03
let average = 0;
for (values of numbers) {
    sum += values;
    average = sum / numbers.length;
}
console.log(average);

/////////////////////////////////////////////////////////
//04
if (average > 20) {
    console.log('valor maior que 20!');
} else {
    console.log('valor menor ou igual a 20');
}

/////////////////////////////////////////////////////////
//05
//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let maxValue = 0;
for (let value = 0; value < numbers.length; value += 1) {
    if (numbers[value] > maxValue) {
        maxValue = numbers[value];
    }
}
console.log(maxValue);

/////////////////////////////////////////////////////////
//06
let counter = 0;
for (value of numbers) {
    if (value % 2 !== 0) {
        counter++;
        if (counter === 0) {
            console.log('Nenhum valor encontrado');
        }
    }
}
console.log(counter);

/////////////////////////////////////////////////////////
//07
//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let minValue = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (minValue > numbers[index]) {
        minValue = numbers[index];
    }
}
console.log(minValue);

/////////////////////////////////////////////////////////
//08
for (let index = 1; index <= 25; index += 1) {
    console.log(index);
}

/////////////////////////////////////////////////////////
//08



/////////////////////////////////////////////////////////
//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 9, 3, 1]
// contar quantos valores repetidos tem no array
