//[2, 3, 6, 7, 10, 1]
function higherIndex(array) {
    let higher = 0;
    const arrayIndex = [];
    for (let index = 0; index < array.length; index += 1) {
        if (higher < array[index]) {
            higher = array[index];
            arrayIndex.push(index);
        }
    }
    let lastIndex = (arrayIndex.length-1);
    return arrayIndex[lastIndex];
}
console.log(higherIndex([2, 3, 6, 7, 10, 1]));