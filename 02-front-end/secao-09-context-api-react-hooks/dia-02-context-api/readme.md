## Introdução
### O que vamos aprender?
Vamos estender nossos conhecimentos em React, estudando alguns recursos avançados que a ferramenta oferece. Hoje, especificamente, você vai entender como utilizar a Context API. Ela permite que você compartilhe estado entre vários componentes em uma árvore de componentes, sem que seja necessário passá-lo manualmente por meio de props do componente que o armazena, até aquele que de fato o utiliza. A Context API é muitas vezes usada como alternativa ao Redux.


Você será capaz de:
Utilizar a Context API do React para gerenciar estado.
Por que isso é importante?
Você viu na seção sobre gerenciamento de estado global um problema frequente que enfrentamos em grandes aplicações React, que é passar informações entre vários componentes da nossa aplicação. Isso leva a padrões não muito recomendados, como é o caso do prop drilling.

Você já deve conhecer uma forma de resolver esse problema: adicionar Redux ou outra biblioteca de gerenciamento de estado à aplicação. O estado seria movido para um store e somente os componentes que precisassem acessá-lo se conectariam ao store e acessariam o estado diretamente, ou seja, sem mais prop drilling 😃.

Agora, usando a Context API, você irá aprender uma forma nativa do React para compartilhar informações entre componentes, sem precisar recorrer ao prop drilling e sem precisar instalar nenhum recurso externo.