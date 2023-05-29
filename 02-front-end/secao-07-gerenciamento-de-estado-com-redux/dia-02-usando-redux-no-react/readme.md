## Introdução - Redux com React
### O que vamos aprender?
A utilizar o Redux em suas aplicações React.

Você será capaz de:
Criar um store Redux em aplicações React.

Criar reducers no Redux em aplicações React.

Criar actions no Redux em aplicações React.

Criar dispatchers no Redux em aplicações React.

Conectar Redux aos componentes React.

Adicionar mais de um reducer a uma store.

Por que isso é importante?
Redux é uma ferramenta utilizada para gerenciar o estado de uma aplicação JavaScript.

Antes de entendermos o porquê da utilização de React com Redux, devemos compreender o porquê de utilizarmos uma biblioteca externa para controlar e gerenciar o estado de uma aplicação.

A maioria das bibliotecas, como React, Angular etc, possuem uma forma interna de gerenciar o estado da aplicação sem o auxílio ou necessidade de uma ferramenta externa. Isto funciona bem para aplicações que possuem poucos componentes mas, à medida que a aplicação cresce, o gerenciamento de estados compartilhados entre componentes torna-se uma tarefa complicada e desgastante.

Em uma aplicação na qual muitos dados são compartilhados entre componentes, pode não ficar nítido onde cada dado deve estar. Além disso, algumas vezes, pode ser criada uma implementação que não é ideal.

Por exemplo: em uma aplicação na qual é necessário compartilhar os dados com vários componentes “filhos”, necessariamente esse dado deve ficar no componente “pai”.

Aplicações maiores também apresentam a necessidade de compartilhar dados entre componentes que não estão na mesma árvore de componentes. Para esse compartilhamento acontecer, esse dado terá de passar através de muitos componentes até chegar em seu componente alvo.

Com todos estes exemplos, fica nítido que o gerenciamento de estado torna-se confuso à medida que a aplicação cresce. Por isso, utilizar uma ferramenta externa para gerenciar o estado, como o Redux, facilitará o desenvolvimento e crescimento das aplicações.