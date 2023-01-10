let organization = {
  name: 'trybe',
  since: 2019,
};

// A variável 'storage' pode ser localStorage ou sessionStorage
let storage = localStorage;

storage.setItem('escola', JSON.stringify(organization));
let org = JSON.parse(storage.getItem('escola'));
console.log(org); // { name: 'trybe', since: 2019 }

let classes = ['2019/set', '2019/oct'];
storage.setItem('turmas', JSON.stringify(classes));
let cls = JSON.parse(storage.getItem('turmas'));
console.log(cls); // ['2019/set', '2019/oct']