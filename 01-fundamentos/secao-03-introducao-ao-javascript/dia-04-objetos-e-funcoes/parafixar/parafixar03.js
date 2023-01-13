// 01
// function sum(a, b) {
//     return a + b;
// }

// function minus(a, b) {
//     return a - b;
// }

// function division(a, b) {
//     return a / b;
// }

// function multiplication(a, b) {
//     return a * b;
// }

// function module(a, b) {
//     return a % b;
// }

// console.log(sum(10, 50));

// 02
// function higherNumber(num1, num2) {
//     if (num1 > num2) {
//         return `O maior é o ${num1}`;
//     } else {
//         return `O maior é o ${num2}`;
//     }
// }
// console.log(higherNumber(30, 40));

//03
// function higherThree(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return `O maior é o ${num1}`;
//     } else if(num2 > num1 && num2 > num3) {
//         return `O maior é o ${num2}`;
//     } else {
//         return `O maior é o ${num3}`;
//     }
// }
// console.log(higherThree(15, 20, 7));

//04
// function isPositive(num) {
//     if (num > 0){
//         return `Positive`;
//     }else if (num < 0){
//         return `Negative`;
//     }else{
//         return 'zero';
//     }
// }
// console.log(isPositive(-7));

// 05
// function isTriangule(angle1, angle2, angle3) {
//     if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
//         return 'Invalid angle!';
//     } else {
//         if ((angle1 + angle2 + angle3) === 180) {
//             return 'True';
//         } else {
//             return 'False';
//         }
//     }
// }
// console.log(isTriangule(40, 50, 90));

// Objetos e for/in
// 06

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// info.recorrente = 'Sim';
// info.cidade = 'Patópolis';
// info['nota'] = 'Namorada do personagem principal dos quadrinhos da Disney';

// console.log(`Bem-vinda, ${info.personagem}`);
// console.log(info);

// for (let keys in info) {
//     console.log(keys);
// }

// for (let keys in info) {
//     console.log(info[keys]);
// }

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics",
//     nota: 'O último MacPatinhas',
// };
// for (const key in info, info2) {
//     console.log(`${info[key]} e ${info2[key]}`);
// }

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//         {
//             titulo: 'O Pior Dia de Todos',
//             autor: 'Daniela Kopsch',
//             editora: 'Tordesilhas',
//         },
//     ],
// };

// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   });
// console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`);
// console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);
// console.table(leitor.livrosFavoritos);