function palindrome(word) {
    let size = word.length - 1;

    for (let index = 0; index < word.length; index++) {
        for (let index = 0; index < word.length; index++) {
            if (word[index] !== word[size - index]) {
                return 'False';
            }
        }
    }
    return 'True';
}
console.log(palindrome('ubararabu'));