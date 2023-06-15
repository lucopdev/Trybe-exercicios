const readline = require('readline-sync');
const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura ');

const bmi = (weight, height) => {
  if(height < 3) return weight/(height**2);
  if(height > 3) {
    const heightInMeters = height/100;
    return weight / (heightInMeters**2);
  }
}

const main = (weight, height) => {
  const bmiParam = bmi(weight, height).toFixed(2);
  const situation = (bmi) => {
    if(bmi < 18.5) return 'Abaixo do peso (magreza)';
    if(bmi >= 18.5 && bmi <= 24.9) return('Peso normal');
    if(bmi >= 25.0 && bmi <= 29.9) return('Acima do Peso');
    if(bmi >= 30 && bmi <= 34.9) return('Obesidade grau I');
    if(bmi >= 35 && bmi <= 39.9) return('Obesidade grau II');
    if(bmi >= 40) return('Obesidade grau III e IV');
  }
  return(`Seu IMC é: ${bmiParam}, ${situation(bmiParam)}`);
}

console.log(main(weight, height));

module.exports = main;