let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

/////////////////////////////////////////////////////////

let sum = 0;
for(values of numbers){
    sum += values;
}

console.log(sum);

/////////////////////////////////////////////////////////

let average = 0;
for (values of numbers){
    sum += values;
    average = sum/numbers.length;
}
console.log(average);