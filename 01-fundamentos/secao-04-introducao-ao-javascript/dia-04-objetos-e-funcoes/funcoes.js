function palindrome(word) {
    let size = word.length-1;
    let palindrome = 0;
    for (let index = 0; index < word.length; index++) {
        for (let index = 0; index < word.length; index++) {
            if (word[index] === word[size-index]) {
                palindrome += 1;
            }else{
                return 'False';
            }
            if(palindrome === word.lengh/2)
            return 'True';
        }
    }
}
console.log(palindrome('arara'));

// let word = 'arara';
// let size = word.length-1;
// for (let index = 0; index < word.length; index++) {
//     console.log(word[size-index]);
// }


