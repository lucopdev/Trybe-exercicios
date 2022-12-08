function generatePhoneNumber(arrayNumber) {
    let generatedNumber = `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`;
    let repeatedNumber = 0;
    for (let index = 0; index < arrayNumber.length; index += 1) {
    if (!(arrayNumber.length === 11)) {
      return 'Array com tamanho incorreto.';
    } else if (arrayNumber[index] < 0 || arrayNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let index = 0; index < arrayNumber.length; index += 1) {
      repeatedNumber = 0;
    for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
      if (arrayNumber[index] === arrayNumber[index2]) {
        repeatedNumber +=1;
      }
    }
    if (repeatedNumber >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
  }
  return generatedNumber;
  }
  console.log(generatePhoneNumber([1,1,2,3,4,5,6,7,8,1,0]))