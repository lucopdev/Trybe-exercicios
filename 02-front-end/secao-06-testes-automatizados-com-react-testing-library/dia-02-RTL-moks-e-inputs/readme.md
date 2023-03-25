## Introdução
### O que vamos aprender?
Você já aprendeu a usar as principais ferramentas que a react-testing-library oferece. Agora vamos entender mais sobre mocks!

As Mock functions são ferramentas que nos permitem simular o comportamento de funções reais.

Imagine o seguinte cenário: em um teste, você tem funções com retornos variáveis, como, por exemplo, requisições para APIs, além de outras funções de retorno aleatório. Não há como testar se de fato elas, ou a lógica que depende delas, estão funcionando. Se pensarmos em uma requisição para uma API, ela pode estar fora do ar ou, a depender do retorno, o teste, às vezes, passará, e, às vezes, não.

Para contornar esse problema, podemos simular esses comportamentos no contexto do teste. No Jest e na RTL, as Mock functions simulam o comportamento de uma função real apenas no escopo do teste e nos dão controle sobre qual retorno essa função envia, quantas vezes ela foi chamada, entre outras coisas.

Você será capaz de
Utilizar mock functions para simular funções e seus retornos;
Criar mocks de APIs utilizando fetch;
Testar inputs.
Por que isso é importante?
Ter uma boa cobertura de testes aumenta a confiabilidade da sua aplicação, o que significa que teremos que testar todas as suas partes, inclusive formulários e requisições para APIs.

Para manter uma boa cobertura de testes de maneira sustentável, também é necessário garantir que seus testes executem rápido. É aí que entram os mocks, que nos permitem evitar chamadas reais a APIs e transições CSS, por exemplo, que podem demorar muito ou, em alguns casos, ter resultados imprevisíveis.

Simular ou mockar funções é a forma mais prática e performática de realizar testes confiáveis e controlar seu comportamento.

