// const starships = {
//   option1: "Tardis",
//   option2: "Millennium Falcon",
//   option3: "Enterprise",
//   option4: "Heart of Gold"
// }
// console.log(Object.values(starships));

// const top3Albums = {
//   1: 'Nightfall in Middle-Earth',
//   2: 'Imaginations from the Other Side',
//   3: 'Somewhere Far Beyond',
// };

// console.log(Object.entries(top3Albums));

// const getDayName = (number) => {
//   const dayNumber = number - 1;
//   const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//   return days[dayNumber];
// };

// const printDayname = (dayNumber) => {
//   console.log(getDayName(dayNumber));
// };

const band = {
  name: 'Blind Guardian',
  formedIn: 1986,
  lastAlbum: 'Beyond the Red Mirror',
};

const info = {
  genre: 'Power Metal',
  lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
};

console.log(Object.assign(band, info));