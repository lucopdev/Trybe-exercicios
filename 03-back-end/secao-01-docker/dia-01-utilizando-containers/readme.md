## Introdução
### O que vamos aprender?
Hoje você vai aprender sobre uma ferramenta incrível: o Docker 🐋 !

Chegou o momento de entender como utilizamos essa ferramenta e qual é a importância dela. Você também aprenderá a fazer a instalação do Docker, entenderá a diferença entre imagens e containers, além de rodar seu primeiro container Docker, o hello-world!

Confira no vídeo abaixo o que aprenderemos nesse conteúdo e bora mergulhar no fantástico mundo de Docker!


Você será capaz de:
Compreender o conceito de empacotamento de aplicações;
Compreender o que é o Docker e quais problemas ele resolve;
Compreender o que é uma imagem Docker;
Compreender o que é um container Docker;
Instalar o Docker;
Executar seu primeiro container Docker;
Compreender quais são os principais comandos para utilização do Docker na interface de linha de comando (CLI);
Obter imagens vindas de um Registry e executá-las como um container!
Por que isso é importante?
Enquanto pessoas desenvolvedoras é comum nos depararmos com diversas ferramentas e tecnologias, tendo que lidar com uma quantidade significativa de ambientes distintos durante o ciclo de desenvolvimento. Por exemplo, temos:

o ambiente local, que é o computador que usamos para desenvolver;
o ambiente de staging, que utilizamos para testar e validar as funcionalidades;
o ambiente de produção acessado pelas pessoas usuárias do produto.
Esse cenário exige que sejam feitas a preparação e configuração de todo o ambiente com as tecnologias necessárias, além de fazê-las funcionar em conjunto.

Fazer isso nem sempre é uma tarefa simples! O processo se torna ainda mais complexo quando há múltiplos ambientes, distintos entre si, e também há a necessidade de rodar em diversas máquinas (desde sua máquina pessoal local, servidores externos pagos, ou mesmo uma máquina virtual) que, muitas vezes, possuem configurações e utilizam sistemas operacionais diferentes.

Por isso, além de nos preocuparmos com o código, temos que fornecer as dependências necessárias para rodá-lo em diferentes configurações. A partir disto surge a famosa frase:

Ao som de Mestre dos testes
Ao som de Mestre dos testes
Acesse o vídeo (obra-prima) “Mestre dos Testes” por meio deste link!

Essa frase é famosa justamente porque precisamos lidar com os diferentes cenários citados até aqui.

Por exemplo, se uma pessoa desenvolve utilizando uma distribuição ‘A’ de Linux, outra utiliza Windows e outra Mac e no servidor roda uma distribuição ‘B’ de Linux, todas elas estão trabalhando no mesmo projeto, e da mesma forma, pois estão disponibilizando-o para o ambiente de produção, em um servidor remoto comum, conhecido como processo de deploy ou implantação.

Além dos diferentes sistemas operacionais, é comum que existam softwares, ferramentas e dependências distintas ou com versões diferentes em cada máquina. Dessa maneira, é muito difícil garantir que o que funciona na máquina de uma pessoa funcionará na máquina de outra sem a necessidade de fazer novas configurações. Inclusive, não conseguimos nem garantir que também funcionará nos servidores durante o processo de deploy.

Para resolver estes problemas de complexidade e de compatibilidade, bem como economizar o tempo no processo de preparação de uma máquina para rodar um programa específico, foi criado o Docker. 🐋

Isso funciona em todas as máquinas
Isso funciona em todas as máquinas
Com o Docker também conseguimos simular e testar facilmente um ambiente completo, de maneira leve e inteligente, em questão de minutos, podendo replicar tais configurações para outra máquina com facilidade, além de conseguir trabalhar com nossas aplicações em escala de forma simples!

Portanto, por meio do Docker resolvemos o problema de incompatibilidade com outros sistemas, dado que ele funciona como uma espécie de “empacotador” de todas essas dependências e requisitos para que sua aplicação funcione em qualquer ambiente! Isso torna simples sua disponibilização!

Por todas essas vantagens, o Docker ganhou muito espaço e seu uso é cada vez mais comum!

As maiores empresas de tecnologia utilizam o Docker para manter grandes arquiteturas, assim como as pequenas empresas utilizam de suas facilidades para manter suas aplicações no ar de forma simples e com menos custos.

Se olharmos o Google Trends (dados sobre pesquisas no Google), começando pelo ano de lançamento do Docker (2013) até o fim da década (2019), conseguimos ter um bom indicador dessa popularidade por meio do número de pesquisas pelo software “Docker” nesse período. Muito disso se deve ao conceito de “conteinerização” (colocar em containers) de aplicações, que é adotado por muitas tecnologias atualmente.

Dados sobre interesse pelo software Docker no Google Trends
Dados sobre interesse pelo software Docker no Google Trends
Dessa forma, é essencial saber Docker, tanto para se adequar ao mercado como para aproveitar seus benefícios durante o ciclo de vida de nossas aplicações.

🐋 Bora para o conteúdo? 🐋

