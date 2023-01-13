const verificaFimPalavra = (stringWord, stringEnding) => {
  let boolean;
  for (let index = 1; index <= stringEnding.length; index += 1) {
    if (stringWord[stringWord.length - index] === stringEnding[stringEnding.length - index]) {
      boolean = true;
    } else {
      boolean = false;
    }
  }
  return boolean;
};
console.log(verificaFimPalavra('joaofernando', 'fernan'));