//[2, 4, 6, 7, 10, 0, -3]
function minnorNumber(array) {
    let minnor = array[0];
    for (let index = 0; index < array.length; index++) {
        for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
            if (array[index] > array[innerIndex] && array[innerIndex] < minnor) {
                minnor = array[innerIndex];
            }
        }
    }
    return minnor;
}
console.log(minnorNumber([2, 4, 6, 7, 10, 0, -3]));