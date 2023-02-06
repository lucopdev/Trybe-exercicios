const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const novosDados = dados.filter((item) => typeof item === 'string')
console.log(novosDados);

const listaNumeros = [10, 20, 30, 40];

const novosNumeros = listaNumeros.filter((numero) => numero > 20);
console.log(novosNumeros);