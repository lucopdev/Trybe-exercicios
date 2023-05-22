const array1 = [1, 2, 3, 4 ]
const array2 = ['maria', 'jose']
const obj = {
  nome: 'Lucas',
  idade: 18
}

console.log([...array2, {...obj}, 'casa', ...array1 ,'amrário']);