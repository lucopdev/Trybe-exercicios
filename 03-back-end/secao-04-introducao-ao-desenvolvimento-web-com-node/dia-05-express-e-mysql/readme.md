## Introdução
### O que vamos aprender?
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

Como você está trabalhando para se tornar uma pessoa desenvolvedora espetacular, você estudará como utilizar o banco de dados MySQL para armazenar e recuperar dados em aplicações Express. 😎