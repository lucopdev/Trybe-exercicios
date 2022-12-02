let engine = 'desligado';

const ligarDesligar = () => (
  engine === 'desligado' ? engine = 'ligado' : engine = 'desligado'
)

console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
