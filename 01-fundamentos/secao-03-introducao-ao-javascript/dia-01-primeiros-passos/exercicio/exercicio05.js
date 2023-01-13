const angle = 78.5;
const angle2 = 48.8;
const angle3 = 52.7;

if (angle < 0 || angle2 < 0 || angle3 < 0) {
    console.log('Angulo inválido!');
} else {
    if (angle + angle2 + angle3 === 180) {
        console.log('True');
    } else {
        console.log('False!')
    }
}