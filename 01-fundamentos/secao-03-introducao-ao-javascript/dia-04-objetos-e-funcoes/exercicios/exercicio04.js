['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
function names(array) {
    let higherName = 0;
    for (let index = 0; index < array.length; index++) {
        for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
            if(array[innerIndex].length > array[index].length){
                higherName = array[innerIndex];
            }
        }
    }
    return higherName;
}
console.log(names(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
