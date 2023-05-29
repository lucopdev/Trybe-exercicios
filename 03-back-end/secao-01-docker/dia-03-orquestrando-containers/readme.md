## Introdução
### O que vamos aprender?
Dando continuidade à nossa seção sobre Docker, aprenderemos como gerenciar nosso ambiente de containers utilizando a ferramenta Docker Compose. Além disso, vamos entender como e por que utilizar volumes e também conhecer o recurso de networks no Docker.

Confira no vídeo tudo o que você vai ser capaz de fazer depois que ler todo o conteúdo (ele está imperdível)! 🚀


Você será capaz de
Instalar e utilizar a ferramenta docker-compose;
Entender a relação entre a ferramenta docker-compose e o Docker, e porque usamos ambos;
Gerenciar redes virtuais, utilizando-as para a comunicação e isolamento entre os contêineres;
Persistir dados dos contêineres utilizando volumes;
Criar arquivos compose para gerenciar todo seu ambiente com contêineres;
Entender e gerenciar Services, Network e Volumes, que são novos conceitos trazidos pelo Docker Compose.
Por que isso é importante?
Chegou o momento de aprender a configurar um ambiente com vários containers de maneira mais simples e prática. Faremos isso com o uso da ferramenta Docker Compose (que chamaremos apenas de Compose).

Em um ecossistema de aplicações com várias linguagens de programação e tecnologias distintas rodando em seus respectivos containers, o Compose entra como uma solução para organizar o funcionamento e a configuração de todas essas partes que compõem uma arquitetura.

Compose gerenciando nossos Containers Docker
Compose gerenciando nossos Containers Docker
Usando o Compose, definimos em um arquivo de configuração YAML todos os detalhes para executar nosso ambiente de desenvolvimento local, aproveitando todas as vantagens que o Docker oferece, porém sem se preocupar em subir cada um dos containers que envolvem uma aplicação com seus parâmetros específicos no run.

Do mesmo jeito que comparamos o Dockerfile a uma receita para construir imagens Docker, podemos dizer que o arquivo Compose também é uma receita, a qual indica todos os componentes que serão utilizados e também em que ordem cada container deve ser executado.

Além disso, nossos ambientes geralmente possuem vários serviços que precisam se comunicar entre si. Por exemplo, um back-end com um front-end ou um serviço com um banco de dados. Nesse contexto, saber como trabalhar com o conceito de redes é muito vantajoso por nos permitir lidar com essa comunicação entre containers mais facilmente.

Outro recurso importante que também precisamos entender são os volumes. Eles são componentes do Docker responsáveis por preservar uma pasta dentro do container, mesmo se ele terminar sua execução. Isso é muito útil, pois é comum precisarmos de soluções para que os dados ou arquivos (como em um banco de dados) possam persistir entre uma execução e outra de container.

Esses componentes junto à própria ferramenta Compose nos permitem criar todo o nosso ambiente de maneira simples, utilizando todos os recursos e vantagens do Docker. Isso garantirá que mesmo que nosso ambiente tenha diversos serviços, como APIs, front-ends, banco de dados, entre outros, conseguiremos integrá-los, permitindo que tudo isso rode em qualquer ambiente com Docker. Com isso, nossas aplicações passam a ser publicadas de forma descomplicada e mais eficiente (parece um sonho, mas é realidade). ⭐