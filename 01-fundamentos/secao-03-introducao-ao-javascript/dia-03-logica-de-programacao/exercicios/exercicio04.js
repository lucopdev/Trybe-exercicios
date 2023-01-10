// 05
let limite = 50;
let primos = [];
let maiorPrimo = 0;

for (let index = 2; index < limite; index += 1) {
    let primo = true;
    for (let indexInterno = 2; indexInterno <= limite; indexInterno += 1) {
        if ((index % indexInterno === 0) && index !== indexInterno) {
            primo = false;
        }
    }
    if (primo === true) {
        primos.push(index);
    }
}

for (let index = 0; index < primos.length; index++) {
    if (primos[index] > maiorPrimo) {
        maiorPrimo = primos[index];
    }
}

console.log(maiorPrimo);