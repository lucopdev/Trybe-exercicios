
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const { spring, summer, autumn, winter } = yearSeasons;
const yearMonths = [...spring, ...summer, ...autumn, ...winter];

console.log(yearMonths);