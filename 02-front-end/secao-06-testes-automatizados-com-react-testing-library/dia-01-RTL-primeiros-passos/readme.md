## Introdução
### O que vamos aprender?
Testes automatizados são parte fundamental de qualquer software de qualidade, com React não é diferente. Ao longo dos próximos dias, aprenderemos a usar a react-testing-library, mas lembrando que existem também outras bibliotecas de testes.

Assim sendo, hoje você vai aprender a escrever testes automatizados em React! Além disso, vai aprender como usar as ferramentas que a react-testing-library oferece para testar componentes e comportamentos inteiros, simulando a ocorrência de eventos e lidando com lógica assíncrona.

Tudo isso, naturalmente, virá acompanhado de uma discussão acerca do que são boas práticas de teste e quais são os tradeoffs de diferentes abordagens de teste. Bora?!


Você será capaz de:
Utilizar os seletores (queries) da React-Testing-Library em testes automatizados;

Simular eventos com a React-Testing-Library em testes automatizados;

Testar fluxos lógicos assíncronos com a React-Testing-Library;

Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem a necessidade de serem alterados.

Por que isso é importante?
Imagine que você está trabalhando em uma aplicação React e precisa realizar uma atualização de um componente para melhorar o desempenho do programa. Quando você o acessa, percebe que ele recebe várias props de outros componentes. Além disso, vários outros recebem props deste mesmo componente. O que você faria para garantir que a sua alteração não está impactando o funcionamento desses outros componentes?

Você mesmo poderia checar se a página está funcionando da maneira que deveria. Mas, pense em ter que fazer isso a cada vez que um commit for realizado? Ou imagine que outra pessoa precise atualizar esse mesmo componente no futuro? Quanto trabalho, não é mesmo!?

Para que não tenhamos uma dor de cabeça enorme, utilizamos testes automatizados, eles são responsáveis por fazer com que a máquina trabalhe a nosso favor

Existem diversas bibliotecas de testes automatizados para serem utilizadas em aplicações React, como react-testing-library e enzyme. Aqui, iremos focar na RTL (React Testing Library). As vantagens da sua utilização são:

É mais simples de usar;

Tem muito menos caveats, situações que podem causar pequenos problemas e dores de cabeça inesperadas;

Reforça o bom uso das melhores práticas de testes ao incentivar e facilitar o teste de comportamentos, e o não de implementação;

Permitir a refatoração da sua arquitetura de componentes;

Utilizando a Enzyme, qualquer mudança na arquitetura quebra parte dos testes.
