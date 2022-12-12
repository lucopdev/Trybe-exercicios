function repeatedValue(array) {
    let counter = 0;
    let counterArray = [];
    let higherNumber = 0;
    let mostRepeated = 0;
    for (let outerIndex = 0; outerIndex < array.length; outerIndex += 1) {
        counter = 0;
        for (let index = 0; index < array.length; index += 1) {
            if (array[index] === array[outerIndex]) {
                counter += 1;
            }
        }
        counterArray.push(counter);
    }
    for (let index = 0; index < counterArray.length; index += 1) {
        if (higherNumber < counterArray[index]) {
            higherNumber = counterArray[index];
            mostRepeated = array[index];
        }
    }
    return mostRepeated;
}
console.log(repeatedValue([2, 5, 3, 2, 5, 4, 5, 8, 2, 4, 3, 4, 5, 3, 4, 5, 1, 9, 0, 3]));