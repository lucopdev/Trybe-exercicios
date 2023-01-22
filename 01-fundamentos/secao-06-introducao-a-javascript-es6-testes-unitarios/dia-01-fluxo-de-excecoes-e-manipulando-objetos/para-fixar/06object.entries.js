const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

const coutries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(coutries);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};