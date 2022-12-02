function translateNumber(romanNumber) {

    let value = 0;

    for (let index = 0; index < romanNumber.length; index += 1) {

        switch (romanNumber) {
            case 'I':
                value = 1;
            case 'V':
                value = 5;
            default:
                value = -1;
                break;
        }
    }
    return value;
}
console.log(translateNumber('V'));