// O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const averageGrade = (index) => {
  const total =  grades[index].reduce((acc, curr) => {
   return acc += curr;
  });
  return total / grades[index].length;
};

const studentAverage = () => {
  let obj = {};
  return students.map((student, index) => {
    if (!student['name']) {
      obj = {
        name: student,
        average: averageGrade(index),
      };
    }
    return obj;
  });
};
console.log(studentAverage());