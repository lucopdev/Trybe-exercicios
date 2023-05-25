## Introdução - Manipulação e Criação de Imagens no Docker
### O que vamos aprender?
Antes de seguirmos com os aprendizados sobre Docker, vamos relembrar tudo o que aprendemos no conteúdo anterior?

Empacotamento de aplicações;
Quais são os problemas que o Docker se propõe a resolver;
Aspectos da arquitetura do Docker;
Principais comandos para utilização do Docker;
Como rodar imagens do Docker Hub (repositório oficial de imagens do Docker).
Agora, chegou o momento de aprofundarmos nosso conhecimento sobre Docker!🐋

Hoje, vamos entender o objetivo de cada comando de Docker, seu uso e suas relações. E tem mais! Também vamos criar imagens Docker para nossas aplicações utilizando os padrões e boas práticas do mercado.

Confira o conteúdo que nos aguarda no vídeo abaixo:


Você será capaz de
Criar imagens do zero no Docker;
Criar imagens Docker usando outras imagens como base;
Aplicar boas práticas e padrões na criação de imagem;
Dockerizar suas aplicações, ou seja, criar uma imagem Docker com tudo que é necessário para executar seus projetos na hora!
Por que isso é importante?
Distinguir as definições de imagem e container é algo muito importante!

Uma imagem Docker é um arquivo imutável e a partir dele um ou mais containers podem ser gerados. Essa imagem pode ser criada a partir do comando docker build, seguindo as instruções contidas em um arquivo chamado Dockerfile.

Frequentemente no contexto de programação, o termo build (‘construir’ em português) se refere ao trabalho de obter todo o nosso projeto (código-fonte, imagens, dependências), e a partir dele construir um produto final que seja executável e melhor de distribuir.

O Dockerfile é um arquivo que contém as instruções necessárias (como uma receita) para construirmos a imagem Docker exatamente como desejamos. Esse arquivo nos mostra as bibliotecas que devem ser instaladas, arquivos que devem ser inicializados etc.

Fluxo do dockerfile
Um container Docker é um processo Linux totalmente isolado. Para que possamos executar esse container é necessário definirmos qual imagem Docker vamos utilizar. Mas e se não tivermos essa imagem Docker localmente em nossa máquina? 🤔

⚠️Importante: se tentarmos executar um novo container com docker run <imagem>, mas não tivermos essa <imagem> (vamos supor aqui o hello-world) localmente, ele nos retorna a seguinte mensagem abaixo:

Copiar
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
Essa mensagem indica que o Docker baixou e armazenou a imagem localmente. A partir disso, sempre que o Docker precisar utilizar esta imagem, ele usará nossa cópia local!

Para avançarmos ainda mais nesse mundo de Docker, hoje veremos onde encontrar essas imagens baixadas e como criar imagens Docker, além de como manipulá-las e removê-las. Vamos mergulhar fundo nesse conteúdo? 🐋