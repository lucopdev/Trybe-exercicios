## Introdução
### Introdução
O que vamos aprender?
Hoje você integrará o banco de dados MySQL a uma aplicação Express utilizando a biblioteca mysql2. Isso permitirá que você crie uma API com o Express, capaz de cadastrar, consultar, atualizar e excluir dados do MySQL. 🚀🚀🚀


Você será capaz de:
Configurar um container docker com MySQL;
Utilizar o mysql2 para acessar um servidor MySQL através de uma aplicação Express;
Aplicar o conceito de variáveis de ambiente para separar os parâmetros de configuração do seu código;
Escrever consultas SQL utilizando prepared statements;
Desenvolver um CRUD com Express integrado ao MySQL;
Escrever testes de integração com mock do banco de dados.
Por que isso é importante?
Manipular dados é uma das atividades mais comuns do desenvolvimento de software. Geralmente esses dados são inseridos por meio de formulários pelas pessoas que utilizam sua aplicação, ou de forma estruturada, através de um JSON, por meio de uma requisição a um endpoint de uma API REST.

Na maioria das vezes, esses dados necessitam ser armazenados para posteriormente serem utilizados pela aplicação com o intuito de realizar alguma ação ou fornecer algum tipo de serviço. O banco de dados é uma das ferramentas de armazenamento de dados mais utilizada em aplicações web, portanto uma das atividades mais recorrentes no desenvolvimento de software é armazenar e consultar dados em um banco de dados.

Um exemplo bem corriqueiro disso é quando você se cadastra em um site ou aplicativo, como uma rede social, por exemplo. Neste momento você envia suas informações, que ficarão armazenadas em um banco de dados. Posteriormente, você pode visualizar essas informações e até editá-las ou excluí-las.

Provavelmente em seu primeiro trabalho como pessoa desenvolvedora, você começará com alguma tarefa de realizar a criação ou a manutenção de um CRUD, acrônimo para Create, Read, Update e Delete. Essas são as operações fundamentais realizadas por uma aplicação em um Sistema Gerenciador de Banco de dados (SGBD), o famoso banco de dados.

Como você está trabalhando para se tornar uma pessoa desenvolvedora espetacular, você estudará como utilizar o banco de dados MySQL para armazenar e recuperar dados em aplicações Express. 😎O que vamos aprender?
Hoje você terá mais detalhes sobre como funciona o Express e o que de fato são middlewares. Além disso, no final do conteúdo de hoje você será capaz de organizar rotas separando-as em diferentes arquivos e também saberá lidar com erros no Express.

Vamos nessa? 🚀


Você será capaz de:
Definir o que são middlewares;

Identificar o que são middlewares;

Empregar o encadeamento de middlewares usando a função next.

Empregar middlewares assíncronos no express.

Empregar a passagem de valores entre middlewares.

Empregar middlewares para tratamento de erros.

Empregar o uso de rotas aplicando o Router.

Por que isso é importante?
Para a pessoa desenvolvedora é relevante ter diferenciais no mercado de trabalho. Para isso, um passo importante é entregar uma aplicação que ajuda na otimização e melhor desempenho para seu cliente. Para isso, o estudo de middlewares será um passo importante no seu aprendizado.

Os middlewares irão proporcionar melhor comunicação e maior desempenho nas requisições entre servidor e pessoa cliente. Por exemplo, se uma pessoa fizer uma requisição em um formato não reconhecido pelo servidor, ele pode lançar um erro informando que não reconhece aquela situação. Por outro lado, se esse servidor possuir um middleware específico para a “tradução” entre formatos, essa comunicação poderá ocorrer sem nenhum prejuízo. Essa habilidade vai proporcionar a você um grande diferencial na busca por vagas de pessoas desenvolvedoras em Back-end.

Sensacional, não é? 🎉

Sendo assim, você vai observar os middlewares sendo aplicados com os principais objetivos:

Adicionar funcionalidade de autenticação para dar acesso alguma parte da sua aplicação;
Definir respostas específicas com o status HTTP;
Reutilizar a lógica em várias rotas da aplicação.
Bora entender o que são middlewares? 🚀