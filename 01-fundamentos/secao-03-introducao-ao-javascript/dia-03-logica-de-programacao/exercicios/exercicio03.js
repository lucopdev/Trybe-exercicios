// 03
let array = ['java', 'javascript', 'python', 'html', 'css'];
let largerWord = '';
let minnorWord = '';
let higherWordLength = array[0].length;
let minnorWordLength = array[0].length;

for (let index = 0; index < array.length; index += 1) {
    if (higherWordLength < array[index].length) {
        higherWordLength = array[index].length;
        largerWord = array[index];
    }
}
for (let index = 0; index < array.length; index += 1) {
    if (minnorWordLength > array[index].length) {
        minnorWordLength = array[index].length;
        minnorWord = array[index];
    }
}
console.log(largerWord);
console.log(minnorWord);