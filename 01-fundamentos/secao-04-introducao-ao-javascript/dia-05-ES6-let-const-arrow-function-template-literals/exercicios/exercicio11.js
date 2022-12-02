function higherPhrase(string) {
    let newString = string.split(' ');
    let higherWord = newString[0];
    for (let index in newString) {
        if (newString[index].length > higherWord.length) {
            higherWord = newString[index];
        }
    }
    return higherWord;
}
console.log(higherPhrase('Eu sou um desenvolvedor profissional!'));
