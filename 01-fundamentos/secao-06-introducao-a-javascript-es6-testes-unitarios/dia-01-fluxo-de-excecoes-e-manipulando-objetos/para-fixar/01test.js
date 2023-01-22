const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};

const sum = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));