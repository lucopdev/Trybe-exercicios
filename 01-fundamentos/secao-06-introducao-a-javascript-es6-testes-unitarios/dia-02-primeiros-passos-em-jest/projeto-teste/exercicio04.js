function techList(array = [], personName) {
  if (array.length <= 0) {
    return 'Vazio!';
  }
  const list = [];
  for (let index = 0; index < array.length; index += 1) {
    array.sort();
    const object = {
      tech: array[index],
      name: personName,
    }
    list.push(object);
  }
  return list;
}

module.exports = techList;