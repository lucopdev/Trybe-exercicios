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