const generateNumber = (bet) => {
  let sortNumber;
  bet.forEach((number) => {
    sortNumber = (Math.round(Math.random(number) * 5) === bet[0]);
  });
  if(sortNumber === true) {
    return 'Parabéns, você acertou!';
  }
  return 'Que peninha...';
};
console.log(generateNumber([4]));
