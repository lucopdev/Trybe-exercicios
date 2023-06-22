## Introdução - Arquitetura de Software
### O que vamos aprender?
Quando uma aplicação é pequena, é fácil se localizar nela - entender onde está cada parte da lógica e o que é preciso ler e mudar para acrescentar alguma funcionalidade. À medida que a aplicação cresce e a quantidade de linhas de código se acumulam em milhares, é imprescindível decidir como a aplicação será organizada. Isto é: como vamos organizar a nossa lógica? Quais arquivos teremos? Em quais diretórios? Quais combinados vamos ter para que todo um time, ou vários times, possam lidar com uma mesma aplicação sem haver confusão?

Precisamos, em suma, criar padrões de organização para nossa aplicação. Em Ciência da Computação, chamamos isso de Arquitetura de Software. É um campo de estudo rico em análises e experimentos com diferentes organizações de aplicação. Em Desenvolvimento Web, um modelo se destaca em popularidade e reconhecida eficácia, e iremos estudá-lo nesta seção.

Iremos aprender o modelo arquitetural baseado em camadas, ou Arquitetura em Camadas, onde cada camada agrega um conjunto de arquivos que tem um papel bem definido e documentado dentro do programa.

Aqui, iremos organizar nosso código em três camadas: a Model, a Service e a Controller. Cada uma dessas será estudada com mais detalhes ao longo da seção e, para simplificar a nossa comunicação, iremos nos referir a este modelo como Arquitetura em Camadas.

Vamos começar!

## Introdução
### O que vamos aprender?
Hoje vamos estudar como organizar o nosso código aplicando o conceito de arquitetura de software. Vamos aplicar ao nosso código uma arquitetura baseada em camadas onde trabalharemos com três camadas: a camada Model; a camada Service; a camada Controller, onde cada uma das camadas possui uma responsabilidade única e bem definida a qual acomodará o código relacionado a esta responsabilidade.


Você será capaz de:
Definir o conceito de Arquitetura de Software;
Utilizar a arquitetura baseada em camadas em uma aplicação criada do zero.
Identificar os componentes de software pertencentes a camada Model.
Por que isso é importante?
À medida que um software cresce, sua complexidade aumenta e adicionar ou mesmo dar manutenção a funcionalidades pode tornar-se uma atividade desafiadora. Por isso, é necessário que nosso código siga algum tipo de organização que facilite a modificação ou adição de novas linhas de código, além de simplificar a leitura e o entendimento da responsabilidade de cada trecho do código, principalmente para pessoas recém-chegadas ao time de desenvolvimento.

Esta organização recebe o nome de arquitetura de software e existem diversas maneiras de se projetar um software, em outras palavras, existem diversas arquiteturas que podem ser utilizadas no processo de desenvolvimento de software. Cada modelo arquitetural possui vantagens e desvantagens que devem ser consideradas no processo de escolha.

Possuir esse tipo de conhecimento lhe colocará em uma posição de destaque em processos seletivos, aumentando significativamente suas chances de conseguir sua posição como pessoa desenvolvedora.

Ao longo da seção trabalharemos com um modelo de arquitetura baseado em camadas. Iremos dividir nossa aplicação em três camadas principais, Model, Service e Controller. Hoje nosso foco é entender melhor a camada Model.

Bora lá!