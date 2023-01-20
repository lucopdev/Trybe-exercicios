## Introdução
### O que vamos aprender
Hoje você vai aprender um pouco sobre fluxo de exceção, isto é, sobre como tratar os erros no seu código e na sua aplicação utilizando os métodos throw e try/catch.

Além disso, você também vai aprender algumas funções que interagem com objetos e que vão te auxiliar na leitura de valores ou chaves, e também quando precisar copiá-los. Essas funções fazem parte do ES6 (ECMAScript 6), que é um padrão de escrita para o JavaScript.

Os métodos que você vai aprender são:

Object.keys;

Object.entries;

Object.assign;

Object.values.

Você será capaz de
Lançar erros com throw e capturá-los com o bloco try/catch;

Acessar todas as chaves de um objeto com o método Object.keys;

Acessar os pares chave-valor de um objeto com o método Object.entries;

Acessar todos os valores de um objeto com o método Object.values;

Copiar um objeto com o método Object.assign;

Adicionar propriedades a um objeto.

Por que isso é importante?
Imagine que você desenvolveu uma aplicação para realizar o cadastro de clientes de uma loja. Você cria campos para a pessoa digitar suas informações, como nome, email e senha, e cria o botão para finalizar o cadastro. Ao testar seu código, tudo está funcionando corretamente.

Como você acha que seu código vai se comportar caso seja digitado um email sem o @? Ou uma senha com caracteres especiais? Ou um número de CPF inválido? 🤔

Ao desenvolver uma aplicação, você precisa analisar quais os caminhos que o seu código pode percorrer. Em geral, sempre pensamos no caminho em que a aplicação funcionará corretamente. Mas isso nem sempre acontece, e você precisa se preparar para lidar com situações em que podem acontecer desvios no funcionamento correto da sua aplicação.

A sua aplicação deve estar preparada para lidar com esse tipo de situação, e a utilização dos fluxos de exceção como o throw e o try/catch vão te auxiliar nessa tarefa.

Por fim, aprender a lidar com objetos e suas propriedades é essencial. Por exemplo, ao criar o sistema de cadastro de clientes, você salvou as informações em um objeto. Para manipular esses dados, é necessário utilizar alguns métodos que consigam acessar a chave, o valor e também realizar cópias do objeto.

Legal, né? 🤩


