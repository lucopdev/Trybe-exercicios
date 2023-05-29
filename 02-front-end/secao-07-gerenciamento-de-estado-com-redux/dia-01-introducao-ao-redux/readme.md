## Introdução - O que é Redux?
### O Redux é uma biblioteca de gerenciamento de estado global que pode ser utilizada com algum framework front-end ou com JavaScript puro.

Com o Redux você consegue ter um estado global para a sua aplicação. E, uma vez definido esse estado, você conseguirá ler e escrever as informações a partir de qualquer lugar (ou qualquer componente, no caso de usar Redux com React).

As tarefas de leitura e escrita no estado global são feitas de forma bem estruturada, isso é, o Redux define uma “receita” que deverá ser seguida. Por essa razão, o Redux é considerado uma biblioteca “opinativa” (tradução de opinionated, que significa que a biblioteca possui regras bem definidas de como trabalhar).

O que vamos aprender?
No dia de hoje, vamos aprender sobre a biblioteca do Redux. Ela é utilizada para ajudar no gerenciamento de estado e possui ampla adoção entre as pessoas que desenvolvem em React.

Devido ao fato do Redux ser uma biblioteca que tem uma ligação muito forte com o React, é comum associarmos o Redux com o React. Entretanto, é possível usar o Redux com qualquer framework front-end de sua preferência, ou até mesmo usá-lo com JavaScript puro.

No dia de hoje, iremos usar o Redux com Javascript puro, para entendermos os conceitos da biblioteca.

Você será capaz de:
Criar uma store para armazenar o estado de uma aplicação;

Utilizar Reducers, Actions, e a função dispatch() para atualizar a store;

Utilizar a função getState() para ler dados da store.

Por que isso é importante?
Imagine que você precisa passar informações entre diferentes componentes em React. Imagine também que estas informações descem vários níveis na hierarquia de componentes. Você concorda que quando o estado é guardado por um componente, essa manipulação vai ficando cada vez mais difícil?

Suponha que você tem um componente X que possui um dado que precisa ser repassado para um componente Y, que está 10 níveis abaixo da hierarquia de componentes. Você precisa passar esse dado todos os componentes no meio, mesmo quando nenhum deles utiliza esse dado. Esse problema se chama prop drilling, e você aprenderá a resolvê-lo através do Redux! 🚀

Quando você, enquanto pessoa que desenvolve software, passa a adotar uma abordagem como a do Redux, significa que está levando a um outro nível a organização do seu código, preocupando-se em como transitar as informações entre os componentes e deixando seu código mais organizado e com maior confiabilidade.