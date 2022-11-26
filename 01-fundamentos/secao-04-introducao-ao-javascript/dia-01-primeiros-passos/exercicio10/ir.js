function setAliquotINSS(value) {

    let aliquotINSS = 0;

    if (value <= 1556.94) {
        return aliquotINSS = 8 / 100;
    } else if (value > 1556.94 && value <= 2594.92) {
        return aliquotINSS = 9 / 100;
    } else if (value > 2594.92 && value <= 5189.82) {
        return aliquotINSS = 11 / 100;
    } else if (value > 5189.82) {
        return aliquotINSS = 570.88;
    }
}

function setIT(){
    
}

console.log(setAliquotINSS(2456.85));