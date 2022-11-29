let number = 10;
let factorial = number;
for (let index = 1; index < number; index += 1) {
    factorial = factorial * (number-index);    
}
console.log(factorial);