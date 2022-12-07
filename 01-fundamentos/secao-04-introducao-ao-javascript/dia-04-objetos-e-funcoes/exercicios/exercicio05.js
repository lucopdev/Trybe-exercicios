function repeatedValue(array) {
    const counterArray = [];
    let counter = 0;
    let counterArrayCounter = 0;

    for (let outerIndex = 0; outerIndex < array.length; outerIndex += 1) {
        for (let index = 0; index < array.length; index += 1) {
            if (array[index] === array[outerIndex]) {
                counter += 1;
            }
        }
        counterArray.push(counter);
        counter = 0;
    }
    return counterArray;
}
console.log(repeatedValue([2, 3, 2, 5, 8, 2, 3]));