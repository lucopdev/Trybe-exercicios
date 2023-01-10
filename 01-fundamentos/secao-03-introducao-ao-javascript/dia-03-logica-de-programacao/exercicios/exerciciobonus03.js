// 03
let base = 5;
let draw = '*';
let caracter = '';
let position = base;

for (let line = 0; line < base; line += 1) {
    for (let column = 0; column < base; column++) {
        if (column < position) {
            caracter += ' ';
        } else {
            caracter += draw;
        }
    }
    console.log(caracter);
    caracter = '';
    position -= 1;
}