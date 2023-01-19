## Introdução
### O que vamos aprender?
Construir páginas responsivas é uma habilidade fundamental para pessoas que trabalham com desenvolvimento front-end hoje em dia. Quando falamos sobre páginas responsivas, o termo “mobile first“ - layout voltado para dispositivos móveis - vem à cabeça imediatamente.

Em teoria, é mais fácil construir um layout “mobile first” quando você está começando o desenvolvimento, pois você não tem que se preocupar muito sobre funcionalidades complexas que podem entrar em telas grandes de desktop.

Você vai aprender como utilizar media queries para mostrar um layout diferente em tamanhos de tela diferentes.

Exemplo:

Layout 1 para telas grandes: desktops, laptops, etc;

Layout 2 para telas médias: tablets, telefones com tela grande (Samsung Note), etc;

Layout 3 para telas pequenas: smartphones.

Media queries são bastante utilizadas no design responsivo para mostrar diferentes layouts para diferentes telas, dependendo do seu tamanho e/ou orientação. A principal razão para isso é que alguns layouts podem parecer “estranhos” (ou até completamente quebrados) em telas muito estreitas, ou muito largas.

Você será capaz de:
Criar regras CSS específicas para serem aplicadas a dispositivos móveis;

Construir páginas que alteram o seu layout de acordo com a orientação da tela.

Por que isso é importante?
Responsividade é uma abordagem de design e desenvolvimento para criar layouts que se adaptam ao ambiente da pessoa usuária conforme o tamanho, orientação e plataforma da sua tela. Em um cenário onde os tamanhos das telas que usamos variam drasticamente, a responsividade é considerada uma capacidade indispensável para qualquer novo projeto.

É importante deixar nítido que design não é desenvolvimento e desenvolvimento não é design.

As duas frentes trabalham juntas para criar um produto final, mas a forma como elas trabalham não necessariamente segue o mesmo padrão. É comum escolher entre um caminho estritamente voltado para desktop ou para mobile tanto durante o design quanto durante o desenvolvimento, se isso for o melhor para o projeto.

Porém podemos adotar uma abordagem flexível, em que durante o design o foco é no desktop, e durante o início do desenvolvimento o foco é no mobile primeiro.

Pode parecer contraintuitivo, mas essa abordagem flexível é mais comum do que você imagina. Quando acontece o design de uma página que vai atender pessoas usuárias tanto de desktop quanto de mobile, geralmente é melhor fazer o design da versão desktop primeiro (porque, no pior caso, esse será o único design da página). 😆

E então, quando chegar à fase de desenvolvimento, existem alguns benefícios de você inverter essa lógica e codar o CSS focado para o mobile primeiro.

O tempo de carregamento para dispositivos móveis é menor.

Pense em como o navegador interpreta o código CSS: de cima pra baixo. ⬇ 🤔

Isso significa que, se você colocar o CSS para a versão desktop primeiro, o navegador do mobile vai ter que interpretar todo esse CSS antes de ele chegar ao código CSS feito para o mobile, que é o que ele precisa renderizar.

Se você colocar o CSS para mobile primeiro, o navegador da pessoa usuária mobile vai renderizar logo o primeiro CSS que ele encontrar, resultando numa experiência mais rápida.

É importante lembrar que pessoas usuárias de dispositivos mobile geralmente têm menos poder de processamento, menos banda de internet disponível… então, qualquer otimização que reduza o tempo de carregamento para eles já é um ganho! 🏅

Geralmente, resulta em menos linhas de código.

Quando você toma uma abordagem de pensar no mobile primeiro, o resultado geralmente são menos linhas de CSS. Mas por quê?

Os elementos mostrados na versão mobile tendem a ser blocos mais simples, o que significa que é muito mais fácil escrever CSS para customizar essa versão numa tela desktop mais complexa do que pegar um código complexo e cheio de detalhes feito para uma tela desktop e ter que simplificá-lo para uma tela mobile. 🧠

Faz muito mais sentido você começar com elementos simples, a que você pode ir adicionando detalhes e comportamentos conforme a necessidade, do que começar com elementos extensos e complexos, que você possivelmente precisará de muito mais código para redefini-los.

