// 01
let number = 4;
let factorial = number;
for (let index = 1; index < number; index += 1) {
    factorial *= (number-index);    
}
console.log(factorial);