// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

const hydrate = (string) => {
  let sum = 0;
  const number = string.replace(/[^0-9]/g, '').split('');
  for (let index = 0; index < number.length; index += 1) {
    sum += Number(number[index]);
  }
  if (sum === 0 || sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = hydrate;