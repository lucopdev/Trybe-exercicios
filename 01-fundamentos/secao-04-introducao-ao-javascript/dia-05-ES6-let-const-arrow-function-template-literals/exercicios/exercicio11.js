function longestWord(string) {
    let newString = string.split(' ');
    let higherWord = newString[0];
    for (let index in newString) {
        if (newString[index].length > higherWord.length) {
            higherWord = newString[index];
        }
    }
    return higherWord;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

