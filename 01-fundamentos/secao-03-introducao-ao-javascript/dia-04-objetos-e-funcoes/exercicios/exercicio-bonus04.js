let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

// Duas formas de acessar as propriedades do objeto "ultimoMoradorBlocoDois"
console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

// Ou

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois['nome'] + ' ' + ultimoMoradorBlocoDois['sobrenome'] + ' mora no ' + ultimoMoradorBlocoDois['andar'] + '° andar, apartamento ' + ultimoMoradorBlocoDois['apartamento']);