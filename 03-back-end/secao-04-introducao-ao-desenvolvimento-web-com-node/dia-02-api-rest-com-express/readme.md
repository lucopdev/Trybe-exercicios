## Introdução
### O que vamos aprender?
Até aqui, você já criou aplicações front-end de grande complexidade, subiu um banco de dados em sua máquina e operou com ele diretamente. Agora, falta conectar essas duas coisas, ou seja, juntar o Front com o Back.

Pense em um aplicativo de receitas ou uma aplicação de músicas ou até mesmo em jogo de Trívia: Conseguimos visualizar como é o front-end dessas aplicações, não é mesmo!? E agora, conseguimos também imaginar como são os bancos de dados onde as receitas, músicas e perguntas de trívia são armazenadas!

Mas, você aprendeu a operar em um banco de dados escrevendo consultas e comandos em interface gráfica. Um aplicativo de receitas, por exemplo, pega suas informações sem passar por interfaces!

Como? 🤔

Para sabermos a resposta, primeiro vamos pensar no front-end. Para obter os dados de que precisa, você já sabe que deve fazer uma requisição a uma URL. Já em back-end,para obter os dados que precisa, você precisa fazer uma consulta ao banco de dados.

Pergunta: Como nós levamos essa requisição ao banco de dados?! Em outras palavras… Como eu conecto um front-end com um banco de dados?

Pensemos em conjunto. Agora, você está aprendendo a criar código JavaScript com Node.js, o qual roda em uma máquina diretamente e não só no navegador. Falta abrirmos esse programa para a internet, para que assim possamos receber requisições e nos conectarmos com um banco de dados para guardarmos e obtermos dados. Aplicações que fazem isso na programação, tem um nome APIs web.

Sim! Elas são a resposta para nossa pergunta. Hoje, você irá aprender sobre elas que são pedras fundamentais do desenvolvimento web! E, para treinar, vamos aprender enquanto construímos um programa para gerenciar times de futebol.

Bora fazer um golaço?! 🦶 ⚽ 🧤


Você será capaz de:
Definir um Servidor;

Utilizar o Node.js com o framework Express para criar uma rota de um endpoint de API, acessível pelo navegador;

Utilizar o Nodemon para auxiliar no desenvolvimento de APIs Node.js com o framework Express;

Utilizar o Node.js com o framework Express para receber e tratar requisições com parâmetros de:

rota, ou router params;
consulta, ou query params;
Utilizar o Node.js com o framework Express para receber e tratar requisições com parâmetros em seu corpo, ou body;

Utilizar o Node.js com o framework Express para criar uma aplicação C.R.U.D. - de criação, leitura, atualização e remoção de dados;

Utilizar o Thunder Client para fazer requisições a partir do VS Code;

Descrever uma API REST.

Por que isso é importante?
Uma coisa que define qualquer aplicação web é a capacidade de acessá-la pela internet. Nós sabemos como o front-end recebe as informações de uma aplicação e as transforma em uma visualização belíssima✨ no navegador. Agora, precisamos saber como prover essas informações…

E não é só isso! Estamos falando de APIs web, que garantem o funcionamento de sites, aplicativos e todo tipo de serviço que funcione via internet!

Pense em grandes players, por exemplo: Google e Microsoft Xbox e em seus aplicativos para web: Google Workspace (com aplicativos como Docs, Sheets, Slides e etc…) e Xbox Cloud Gaming (Serviço do Xbox de jogos em nuvem da Microsoft). Agora, imagine qualquer aplicativo de celular que salve seus dados na nuvem. Se algo funciona via web, há grande chance de haver uma API web fazendo isso funcionar. E, hoje, começaremos aprender a criá-las!

Anota aí 🖊: APIs Web são ferramentas definitivas para conectar o front-end de uma aplicação aos dados que ela precisa salvar e receber. O padrão REST, rotas e aplicações C.R.U.D são partes do conhecimento de como se fazer uma boa API - conhecimento que te fará brilhar em inúmeros processos seletivos!