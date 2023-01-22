const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (obj, key, value) => {
  obj[key] = value
};
addShift(lesson2, 'turno', 'noite');

const keysList = (obj) => {
  return Object.keys(obj);
};

const objSize = (obj) => {
  return Object.keys(obj).length;
};

const valueList = (obj) => {
  return Object.values(obj);
};

const allLessons = Object.assign({ lesson1 }, { lesson2 }, { lesson3 });

const allStudents = (allLessons) => {
  let sum = 0;
  for (let index2 = 0; index2 < Object.keys(allLessons).length; index2 += 1) {
    for (let index = 0; index < Object.keys(allLessons).length; index += 1) {
      if (Object.keys(Object.values(allLessons)[index])[index2] === 'numeroEstudantes') {
        sum += ((Object.values(allLessons)[index]).numeroEstudantes)
      }
    }
  }
  console.log(`Ao todo tem ${sum} alunos`);
};
allStudents(allLessons);

console.log('-----------------------------------');

const valueToPosition = (obj, position) => {
  const property = (Object.keys(obj)[position]);
  console.log(obj[property]);
};
valueToPosition(lesson1, 3);

console.log('-----------------------------------');

const verifyData = (obj, key, value) => {
  if (obj[key]) {
    if (obj[key] === value) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }

};
verifyData(lesson1, 'professor', 'Maria Clara');

console.log('-----------------------------------');

const matStudents = (allLessons) => {
  let sum = 0;
  for (let index = 0; index < Object.keys(allLessons).length; index += 1) {
    if (Object.values(allLessons)[index].materia === 'Matemática') {
      sum += (Object.values(allLessons)[index].numeroEstudantes);
    }
  }
  console.log(`Ao todo ${sum} pessoas estudam matemática`);
};
matStudents(allLessons);

console.log('-----------------------------------');

const createReport = (allLessons, professor) => {
  let sum = 0;
  let report = {};
  const materias = [];
  for (let index = 0; index < Object.keys(allLessons).length; index += 1) {
    if (Object.values(allLessons)[index].professor === professor) {
      materias.push(Object.values(allLessons)[index].materia)
      report = {
        professor: professor,
        aulas: materias,
        estudantes: sum += Object.values(allLessons)[index].numeroEstudantes,
      };
    }
  }
  console.log(report);
};
createReport(allLessons, 'Maria Clara');

console.log('-----------------------------------');