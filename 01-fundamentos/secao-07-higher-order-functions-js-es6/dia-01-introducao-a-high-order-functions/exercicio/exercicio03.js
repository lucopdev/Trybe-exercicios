const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareArr = (arr1, arr2) => {
  let count = 0;

  if (arr2 === arr1) {
    count += 1;
  }
  if (arr2 === 'N.A') {
    count += 0;
  }
  if (arr2 !== arr1 && arr2 !== 'N.A') {
    count -= 0.5;
  }
  return count;
};

const autoCorrector = (arr1, arr2, compareFunction) => {
  let result = 0;
  for (let index = 0; index < arr1.length; index += 1) {
    result += compareFunction(arr1[index], arr2[index]);
  }
  return `Sua pontuação foi de ${result} pontos.`;
};

console.log(autoCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, compareArr));